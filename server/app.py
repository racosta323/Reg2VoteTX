from flask import Flask, request, send_file, jsonify
from models import PdfDoc, Person
from flask_cors import CORS
import uuid
import ipdb

app = Flask(__name__)
CORS(app, origins=["https://reg2votetx-front-end.onrender.com", 'http://localhost:5173', 'http://www.reg2votetx.com/'])

@app.route('/generate_pdf', methods = ['POST'])
def generate_pdf():
    print("Request received")
    try:
        data = request.json
        print('Received data:', data)

        person = Person(**data)
        print('Person object created:', person)

        pdf_doc = PdfDoc()

        print("PdfDoc object created")

        filled_pdf = pdf_doc.write_pdf(person)
        print("Filled PDF generated")

        return send_file(
            filled_pdf, 
            as_attachment=True, 
            download_name=f"{data['first_name']}_voter_reg.pdf", 
            mimetype='application/pdf'
            )

    except Exception as e:
        print("Error occurred", str(e))
        return jsonify({"error": str(e)}), 500
    
@app.route('/hello', methods= ['GET'])
def test():
    return jsonify('hello'), 200

    
if __name__ == '__main__':
    app.run(debug=True, port=8001)