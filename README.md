
# PDF Generation API

## Overview

This project provides a Flask-based API for generating PDF forms using user data. It specifically fills out a Texas voter registration form based on the information provided by the user. The API retrieves the PDF template from a specified URL, populates the fields with the provided user data, and returns the filled PDF as a downloadable file.

## Motivation

The main goal of this project is to make it easier for users to complete voter registration forms, which can often be time-consuming and confusing. I learned that voters in Texas must complete this form to register to vote, and the deadline to register is October 7. By automating the process of filling out PDF forms, this project simplifies the experience for users, allowing them to focus on providing the necessary information without worrying about the formatting.

Additionally, I wanted to use this project as a learning experience to deepen my understanding of how to programmatically fill out PDF forms. It provided an opportunity to apply my skills in real-world problem-solving, combining technical growth with a practical solution that can be helpful to others.

## Features

- Retrieve and fill the [Texas Voter Registration form](https://www.sos.state.tx.us/elections/forms/vr-with-receipt.pdf) dynamically.
- Supports various user attributes like name, phone, citizenship status, etc.
- Returns the filled PDF as an attachment (or within the project directory if using CLI)

## Prerequisites

- Python 3.6 or higher
- Flask
- fillpdf library
- requests
- Flask-CORS

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Create a virtual environment (optional but recommended):

   ```bash
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

## Usage

### Using the CLI

To use the project from the command line, you can follow these steps...

1. Run the script

```bash
python cliApp.py
```

2. Input your details and follow the prompts. 

3. Once completed, a copy of your PDF should be generated within the project directory.


### Sending Requests to the API

> **Note:** This section is still a work in progress. See [Upcoming Features](#upcoming-features) section.


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

### `POST /generate_pdf`

- **Description:** Generates a filled PDF based on user data.
- **Request Body:** JSON object containing user attributes.
- **Response:** Filled PDF file as an attachment.

## Upcoming Features

I plan to implement a user-friendly frontend form that will allow users to input their information directly, making it easier to complete the voter registration form. This feature will streamline the process of filling out the PDF and enhance the overall user experience.

**Key features of the upcoming frontend form:**
- Easy-to-use input fields for personal information
- Validation for required fields
- Dynamic form submission to populate the PDF
- Preview of the filled-out PDF before download

Stay tuned for this feature in future updates!

## Acknowledgements

- Flask documentation: [Flask](https://flask.palletsprojects.com/)
- fillpdf library: [fillpdf](https://github.com/FlorianFuchs/fillpdf)

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
