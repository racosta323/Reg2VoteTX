
# Reg2VoteTX

## Overview

This project offers a Flask-based API designed to generate PDF forms using user data collected through a user-friendly, controlled form input on the front end. Specifically, it fills out a Texas voter registration form based on the information provided by the user. The API fetches the PDF template from a specified URL, populates the fields with the user data, and returns the completed PDF as a downloadable file.

## Motivation

The main goal of this project is to make the action of registering to vote more user-friendly and accessible to all. Voter registration forms can often be time-consuming and confusing, and I learned that voters in Texas must complete this form to register to vote. By automating the process of filling out PDF forms, this project simplifies the experience for users, allowing them to focus on providing the necessary information without worrying about the formatting.

Additionally, I wanted to use this project as a learning experience to deepen my understanding of how to programmatically fill out PDF forms. It provided an opportunity to apply my skills in real-world problem-solving, combining technical growth with a practical solution that can be helpful to others.

## Features

- Dynamically retrieves and fills out the Texas Voter Registration form.
- Supports various user attributes such as name, phone, citizenship status, and more.
- Collects user information on the front end and allows users to review their inputs before generating a completed, ready-to-print PDF.

## Prerequisites

### Backend
- Python 3.6 or higher
- Flask
- fillpdf library
- requests
- Flask-CORS

### Frontend
- Vite
- React
- Tailwind CSS

## Installation

## Backend

1. CD into 'server' directory. Create a virtual environment (optional but recommended):

   ```bash
   cd server/
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On Windows:

     ```bash
     venv\Scripts\activate
     ```

   - On macOS/Linux:

     ```bash
     source venv/bin/activate
     ```

4. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```


5. Start the development server by running app.py script. 

   ```bash
   python app.py
   ```

## Frontend

1. CD into 'client' directory.

   ```bash
   cd client/
   ```

2. Install packages using npm

   ```bash
   npm install
   ```

3. Start the development server using npm. 

   ```bash
   npm run dev
   ```

## Usage

### Using the Web App

To use the web app to generate your PDF form, follow these steps:

1. **Access the App:** Open the deployed front end of the project at [www.reg2votetx.com/](https://www.reg2votetx.com/).

2. **Fill Out the Form:** Enter the requested information, such as your name, contact details, and other eligibility details required for the voter registration form in Texas.

3. **Submit:** Once submitted, the app will process your data and provide a downloadable, pre-filled PDF in a separate download page.

4. **Download Your PDF:** After submission, a link to download the filled-out PDF form will be provided.


### Using the CLI

To use the project from the command line, you can follow these steps...

1. Run the script

```bash
python cliApp.py
```

2. Input your details and follow the prompts. 

3. Once completed, a copy of your PDF should be generated within the project directory.


### Sending Requests to the API

1. Start the Flask application:

   ```bash
   python app.py
   ```

   The application will run on `http://127.0.0.1:8000` (or the port you specified).

2. Send a POST request to the `/generate_pdf` endpoint with a JSON body containing the user data:

   ### Example Request

   **URL:** `http://127.0.0.1:5000/generate_pdf`

   **Method:** `POST`

   **Headers:**
   ```
   Content-Type: application/json
   ```

   **Body:**
   ```json
   {
       "first_name": "John",
       "last_name": "Doe",
       "phone": "1234567890",
       "citizenship": "yes",
       "voting_age": "yes",
       "election_worker": "no",
       "gender": "m",
       "no_id": "no",
       "why": "1"
   }
   ```

3. The response will contain the filled PDF as a downloadable attachment.

## API Endpoints

### `POST /hello`

- **Description:** Used for testing
- **Response:** 200

### `POST /generate_pdf`

- **Description:** Generates a filled PDF based on user data.
- **Request Body:** JSON object containing user attributes.
- **Response:** Filled PDF file as an attachment.


## Acknowledgements

- [Flask documentation](https://flask.palletsprojects.com/)
- [fillpdf library](https://github.com/FlorianFuchs/fillpdf)
- [Tailwind CSS documentation](https://tailwindui.com/documentation)

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.


## Contact

For questions, feedback, or collaboration opportunities, feel free to reach out!

- **Email**: racosta323@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/acostarene
- **GitHub**: https://github.com/racosta323/