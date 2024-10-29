import requests
import tempfile
from io import BytesIO
from fillpdf import fillpdfs
from prompts import person_attributes, attribute_keys
from flask import send_file
import os
# from dotenv import load_dotenv
import ipdb
import re


class PdfDoc:
    def __init__(self):
        self.pdf = None
        self.pdf_content = None
        self.url = "https://www.sos.state.tx.us/elections/forms/vr-with-receipt.pdf"
       
    def request(self):
        self.cleanup()

        try:
            response = requests.get(self.url, timeout=30)
            response.raise_for_status()      
            pdf_doc = response.content
            print(f'Initial 20 bytes of PDF content: {pdf_doc[:20]}')

            pdf_doc = self.preprocess_pdf_content(pdf_doc)

            with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
                temp_file.write(pdf_doc)
                self.pdf_content = temp_file.name

            # self.pdf_content = BytesIO(pdf_doc)
            self.pdf = pdf_doc

            # self.pdf = pdf_doc.decode('Latin-1')
            
            print(f"PDF content size: {len(pdf_doc)} bytes")
            
        except requests.exceptions.HTTPError as http_err:
            print(f"HTTP error occurred: {http_err}") 
        except requests.exceptions.RequestException as req_err:
            print(f"Request error occurred: {req_err}") 
        except Exception as e:
            print(f"An error occurred: {e}")  

    def preprocess_pdf_content(self, content):
        if not content.startswith(b'%PDF-'):
            startloc = content.find(b'%PDF-')
            if startloc >= 0:
                content = content[startloc:]
            else:
                raise ValueError("Invalid PDF header")
        return content

    def get_fields(self):
        try:
            with open(self.pdf_content, 'rb') as file:
                self.form_fields = list(fillpdfs.get_form_fields(file).keys())
        except Exception as e:
            print(f"Error getting form fields in data_dict: {e}")
            raise

    def data_dict(self, person, data=None): 
        self.get_fields()
        if data is None:
            data = {}
        
        if not isinstance(person, Person):
            raise ValueError("The 'person' argument must be an instance of the Person class.")
        
        for key, field in zip(attribute_keys, self.form_fields[0:]):
            if key in person._attributes and person._attributes[key] is not None:
                data[field] = person._attributes[key]
        
                if key in ['citizenship', 'voting_age', 'election_worker']:
                    if person._attributes[key].lower() in ['y', 'yes']:
                        data[field] = 'Yes'
                    if person._attributes[key].lower() in ['n', 'no']:
                        data[field] = 'No'    

                if key == 'gender':
                    new_key = "Gender \\(Optional\\)"
                    if person._attributes[key].lower() in ['m', 'male']:
                        data[new_key] = 'Male'
                    elif person._attributes[key].lower() in ['f', 'female']:
                        data[new_key] = 'Female'
                   
                    if field in data:
                        del data[field]
                
                if key == 'no_id':
                     if person._attributes[key].lower() in ['n', 'no']:
                        data[field] = 'True'

                if key == 'why':
                    try:
                        if person._attributes[key] == "1":
                            data[field] = 'New Application'
                        if person._attributes[key] == "2":
                            data[field] = 'Change of Address, Name, or Other Information'
                        if person._attributes[key] == "3":
                            data[field] = 'Request for a Replacement Card'
                    except Exception as e:
                        print('something wrong with why', e) 
        return data
        
    def write_pdf(self, person, save_to_file=False):
        try:
            self.request()
        except Exception as e:
            print(f"Error requesting PDF: {e}")
            raise

        input_pdf_path = self.pdf
        output_pdf = BytesIO()

        try:
            data_dict = self.data_dict(person)
        except Exception as e:
            print(f"Error creating data dictionary: {e}")
            raise
        
        output_pdf_path = f"{person._attributes['first_name']}_{person._attributes['last_name']}_TX_voter_reg.pdf"
        
        try:
            fillpdfs.write_fillable_pdf(input_pdf_path=input_pdf_path, output_pdf_path=output_pdf, data_dict=data_dict)
        except Exception as e:
            print(f"Error writing fillable PDF: {e}")
            raise        

        if save_to_file:
            with open(output_pdf_path, 'wb') as f:
                f.write(output_pdf.getvalue())
        
        output_pdf.seek(0)
        return output_pdf
    
    def cleanup(self):
        if self.pdf_content and os.path.exists(self.pdf_content):
            os.remove(self.pdf_content)

        
class Person:
    def __init__(self,**kwargs):        
        self._attributes = person_attributes

        for key, value in kwargs.items():
            if key in self._attributes:
                self._attributes[key] = value
            else:
                raise AttributeError(f'Invalid attribute: {key}')
            
        cleaned_phone = re.sub(r'\D', '', person_attributes['phone'])
        
        if len(cleaned_phone) >= 10:
            person_attributes['phone'] = cleaned_phone[0:3]
            person_attributes['phone_2'] = cleaned_phone[3:6]
            person_attributes['phone_3'] = cleaned_phone[6:10]
        
        
    def __repr__(self):
        output = f"""
        First name: {self._attributes['first_name']}
        Last name: {self._attributes['last_name']}
        """
        return output