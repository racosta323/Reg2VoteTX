import requests
from io import BytesIO
from fillpdf import fillpdfs

class PdfDoc():
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

        