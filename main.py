import requests
from io import BytesIO
from fillpdf import fillpdfs
import ipdb

class PdfDoc:
    def __init__(self):
        self.pdf = None
        self.pdf_content = None
       
    def request(self):
        try:
            url = "https://www.sos.state.tx.us/elections/forms/vr-with-receipt.pdf"
            request = requests.get(url)
            if request.status_code == 200:
                pdf_doc = request.content
                self.pdf = pdf_doc.decode('Latin-1')
                self.pdf_content = BytesIO(pdf_doc)
        except requests.exceptions.RequestException as e:
            raise SystemExit(e)

    def get_fields(self):
        self.form_fields = list(fillpdfs.get_form_fields(self.pdf_content).keys())

    def data_dict(self, person, data=None): 
        self.get_fields()
        
        if data is None:
            data = {}
        
        if not isinstance(person, Person):
            raise ValueError("The 'person' argument must be an instance of the Person class.")
        
        attribute_keys = [
            "last_name", "first_name", "middle_name", "former_name",
            "street_address", "city", "county", "zip_code", "street_address_2",
            "city_2", "state", "zip_code_2", "former_res", "birth_month", "birth_day",
            "birth_year", "phone", "phone_2", "phone_3", "license", "ssn", "no_id",
            "citizenship", "voting_age", "election_worker", "gender"
        ]
        
        attribute_mapping = {}
        
        for i, key in enumerate(attribute_keys):
            attribute_mapping[key] = self.form_fields[i+1]
            
        for attr, field in attribute_mapping.items():
            if attr in person._attributes and person._attributes[attr] is not None:
                data[field] = person._attributes[attr]
        
        return data
        
    def write_pdf(self, person):
        self.request()
        input_pdf_path = self.pdf
        output_pdf_path = f'{person._attributes['first_name']} TX voter reg.pdf'
        data_dict = self.data_dict(person)
        
        fillpdfs.write_fillable_pdf(input_pdf_path=input_pdf_path, output_pdf_path=output_pdf_path, data_dict=data_dict)
        
class Person:
    def __init__(self,**kwargs):
        self._attributes = {
            "first_name":None,
            "last_name":None,
            "middle_name":None,
            "former_name":None,
            "street_address":None,
            "city":None,
            "county":None,
            "zip_code":None,
            "street_address_2":None,
            "city_2":None,
            "state":None,
            "zip_code_2":None,
            "former_res":None,
            "birth_month":None,
            "birth_day":None,
            "birth_year":None,
            "phone":None,
            "phone_2":None,
            "phone_3":None,
            "license":None,
            "ssn":None,
            "no_id":None,
            "citizenship":None,
            "voting_age":None,
            "election_worker":None,
            "gender":None,
        }

        for key, value in kwargs.items():
            if key in self._attributes:
                self._attributes[key] = value
            else:
                raise AttributeError(f'Invalid attribute: {key}')
            
    def __repr__(self):
        output = f"""
        First name: {self._attributes['first_name']}
        Last name: {self._attributes['last_name']}
        """
        return output
        #     return f'First name: {self._attributes['first_name']}\n
        # "last_name": {self._attributes['last_name']}'

   