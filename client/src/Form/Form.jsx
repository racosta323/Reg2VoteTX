import Buttons from "../Buttons"
import Profile from "./Profile"
import Address from "./Address"
import Personal from "./Personal"
import Purpose from "./Purpose"
import Mailing from "./Mailing"
import { useState } from 'react'
import dataKeys from "./dataKeys"

function Form() {

    const [formData, setFormData] = useState(dataKeys)
    const [url, setUrl] = useState('')
    const [isChecked, setIsChecked] = useState(false)


    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked)
    }

    function willBe18(dob){
        const birthDate = new Date(dob)
        const targetDate = new Date('2024-10-07')

        let ageOnTarget = targetDate.getFullYear() - birthDate.getFullYear()
        const monthDiff = targetDate.getMonth() - birthDate.getMonth()

        if (monthDiff < 0 || (monthDiff === 0 && targetDate.getDate() < birthDate.getDate())) {
            ageOnTarget --
        }
        return ageOnTarget >= 18 ? "yes" : "no"
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name == 'dob') {
            const [year, month, day] = value.split('-')

            const is18 = willBe18(value)
            
            
            setFormData(prevData => ({
                ...prevData,
                'birth_month': month,
                'birth_day': day,
                'birth_year': year,
                'voting_age': is18
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
        let election = ''
        let gender = ''

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
            if (e.target.id == 'election_worker'){
                election = 'yes'
            }
            if (e.target.id == 'male'){
                gender = 'male'
            }
            if (e.target.id == 'female'){
                gender = 'female'
            }

        }

        setFormData(prevData => ({
            ...prevData,
            'why': value,
            'citizenship': citizen,
            'no_id': id,
            'election_worker': election,
            'gender': gender
        }))

    }



    // console.log(JSON.stringify(formData, null, 2));

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
                <Address formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} handleCheckboxChange={handleCheckboxChange} isChecked={isChecked}/>
                {isChecked && (
                    <Mailing formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler}/>
                    )}
                <Personal formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
                <div class='pr-24'>
                    <Buttons type='submit' />
                </div>
            </div>

        </form>
    )
}

export default Form
