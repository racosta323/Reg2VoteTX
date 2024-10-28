from flask import Flask, request, send_file, jsonify
from models import PdfDoc, Person
from flask_cors import CORS
import ipdb

app = Flask(__name__)
CORS(app)

@app.route('/generate_pdf', methods = ['POST'])
def generate_pdf():
    print("Request received")
    try:
        data = request.json
        person = Person(**data)

        pdf_doc = PdfDoc()
        filled_pdf = pdf_doc.write_pdf(person)

        return send_file(
            filled_pdf, 
            as_attachment=True, 
            download_name=f"{data['first_name']}_voter_reg.pdf", 
            mimetype='application/pdf'
            )

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/hello', methods= ['GET'])
def test():

    return jsonify('hello'), 500

    
if __name__ == '__main__':
    app.run(debug=True, port=8001)