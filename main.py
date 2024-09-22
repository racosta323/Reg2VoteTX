import requests
from io import BytesIO
from fillpdf import fillpdfs

class PdfDoc:
    def __init__(self,url,pdf=None, pdf_content=None, form_fields=[]):
        self.url = url
        self._pdf = pdf
        self._pdf_content = pdf_content
        self._form_fields = form_fields 


    def request(self):

        try:
            request = requests.get(self.url)
            if request.status_code == 200:
                pdf_doc = request.content
                self.pdf = pdf_doc.decode('Latin-1')
                self.pdf_content = BytesIO(pdf_doc)
        except requests.exceptions.RequestException as e:
            raise SystemExit(e)


    def get_fields(self):
        
        self.request()
        self.form_fields = list(fillpdfs.get_form_fields(self.pdf_content).keys())

    def data_dict(self, person, data={}):
        
        attribute_mapping = {
            "first_name": self.form_fields[2],
            "last_name": self.form_fields[1],
            "middle_name": self.form_fields[3],
            "former_name": self.form_fields[4],
            "street_address": self.form_fields[5],
            "city": self.form_fields[6],
            "county": self.form_fields[7],
            "zip_code": self.form_fields[8],
            "street_address_2": self.form_fields[9],
            "city_2": self.form_fields[10],
            "state": self.form_fields[11],
            "zip_code_2": self.form_fields[12],
            "former_res": self.form_fields[13],
            "birth_month": self.form_fields[14],
            "birth_day": self.form_fields[15],
            "birth_year": self.form_fields[16],
            "phone": self.form_fields[17],
            "phone_2": self.form_fields[18],
            "phone_3": self.form_fields[19],
            "license": self.form_fields[20],
            "ssn": self.form_fields[21],
            "no_id": self.form_fields[22],
            "citizenship": self.form_fields[33],
            "voting_age": self.form_fields[34],
            "election_worker": self.form_fields[35],
            "gender": self.form_fields[36],
        }
        
        for attr, field in attribute_mapping.items():
            if attr in person._attributes and person._attributes[attr] is not None:
                data[field] = person._attributes[attr]
        
        return data
        
    def write_pdf(self, person):
        
        self.get_fields()
        
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

   