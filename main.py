import requests
from io import BytesIO

class PdfDoc():
    def __init__(self,url):
        self.url = url


    def request(self):
        try:
            request = requests.get(self.url)
            if request.status_code == 200:
                pdf_doc = request.content
                self.pdf = pdf_doc.decode('Latin-1')
                self.pdf_content = BytesIO(pdf_doc)
        except:
            raise 


