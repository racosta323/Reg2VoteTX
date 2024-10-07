import Buttons from "../Buttons"
import Profile from "./Profile"
import Address from "./Address"
import Personal from "./Personal"
import Purpose from "./Purpose"
import { useState } from 'react'
import dataKeys from "./dataKeys"

function Form() {

    const [formData, setFormData] = useState(dataKeys)

    const [url, setUrl] = useState()

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name == 'dob') {
            const [year, month, day] = value.split('-')

            setFormData(prevData => ({
                ...prevData,
                'birth_month': month,
                'birth_day': day,
                'birth_year': year,
            }))

        } else if (name !== 'dob') {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }))

        }


    }

    function checkboxHandler(e) {
        let value = ''
        let citizen = ''
        let id = ''

        if (e.target.checked) {
            if (e.target.id == 'new-application') {
                value = "1"
            }
            if (e.target.id == 'change-address') {
                value = "2"
            }
            if (e.target.id == 'replacement-card') {
                value = "3"
            }
            if (e.target.id == 'citizen-yes') {
                citizen = 'yes'
            }
            if (e.target.id == 'citizen_no') {
                citizen = 'no'
            }
            if (e.target.id == 'no_id') {
                id = 'no'
            }
        }

        setFormData(prevData => ({
            ...prevData,
            'why': value,
            'citizenship': citizen,
            'no_id': id
        }))

    }



    console.log(JSON.stringify(formData, null, 2));

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://127.0.0.1:8000/generate_pdf', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(formData, null, 2)

            })

            if (response.ok) {
                const blob = await response.blob()

                setUrl(window.URL.createObjectURL(blob))

                const link = document.createElement('a')
                link.href = url
                console.log(formData)
                link.download = `${formData.last_name}, ${formData.first_name} - voter registration form.pdf`
                link.click()
                link.remove()

            } else {
                console.log("Failed to download file.", response.statusText)
            }

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <form class='max-w-fit' onSubmit={handleSubmit}>
            <div class='p-4 space-y-12 max-w-fit'>
                <Purpose formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
                <Profile formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
                <Address formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
                <Personal formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
                <div class='pr-24'>
                    <Buttons type='submit' />
                </div>
            </div>

        </form>
    )
}

export default Form
