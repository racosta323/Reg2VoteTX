import requests
from io import BytesIO
from fillpdf import fillpdfs

class PdfDoc:
    def __init__(self,url,pdf=None, pdf_content=None, form_fields=[], dict_fields={}):
        self.url = url
        self._pdf = pdf
        self._pdf_content = pdf_content
        self._form_fields = form_fields #dict


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
        self.form_fields = fillpdfs.get_form_fields(self.pdf_content)
        # self.form_fields = list(fillpdfs.get_form_fields(self.pdf_content).keys())



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
            return f'First name: {self._attributes['first_name']}'

   