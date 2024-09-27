from main import PdfDoc
from main import Person
import ipdb

pdf = PdfDoc()
pdf.request()

me = Person(
    first_name="Rene", 
    last_name=None,
    middle_name=None,
    former_name=None,
    street_address=None,
    city=None,
    county=None,
    zip_code=None,
    street_address_2=None,
    city_2=None,
    state=None,
    zip_code_2=None,
    former_res=None,
    birth_month=None,
    birth_day=None,
    birth_year=None,
    phone=None,
    phone_2=None,
    phone_3=None,
    license=None,
    ssn=None,
    no_id=None,
    citizenship=None,
    voting_age=None,
    election_worker=None,
    gender=None)

pdf.data_dict(me)

# pdf.write_pdf(me)

# ipdb.set_trace()