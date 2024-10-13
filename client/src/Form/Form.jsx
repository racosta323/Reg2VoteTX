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
    // const [url, setUrl] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [ selectedCheckbox, setSelectedCheckbox ] = useState(null)
    
    const handleMailingCheckboxChange = (e) => {
        setIsChecked(e.target.checked)
    }

    function willBe18(dob) {
        const birthDate = new Date(dob)
        const targetDate = new Date('2024-10-07')

        let ageOnTarget = targetDate.getFullYear() - birthDate.getFullYear()
        const monthDiff = targetDate.getMonth() - birthDate.getMonth()

        if (monthDiff < 0 || (monthDiff === 0 && targetDate.getDate() < birthDate.getDate())) {
            ageOnTarget--
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

    function checkboxHandler(e){
        const { id, checked } = e.target

        const mapping = {
            'new-application': {key: 'why', value: '1'},
            'change-address' : {key: 'why', value: '2'}, 
            'replacement-card': {key: 'why', value: '3'},
            'citizen-yes': {key: 'citizenship', value: 'yes'},
            'citizen-no': {key: "citizenship", value: "no"},
            "no_id": {key: 'no_id', value: 'no'},
            'election_worker': { key: "election_worker", value: 'yes'},
            'male': {key: 'gender', value: 'male'},
            'female': {key: 'gender', value: 'female'}
        }

        const field = mapping[id]
        console.log(e.target)

        if (checked){
            setSelectedCheckbox(id)
        } else {
            setSelectedCheckbox(null)
        }

        if (field){
            setFormData(prevData => ({
                ...prevData,
                [field.key] : checked ? field.value : ''
            }))
        }
    }

    
    // console.log(JSON.stringify(formData, null, 2));

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
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
                // console.log(blob)
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                
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
        <form className='max-w-fit' onSubmit={handleSubmit}>
            <div className='p-4 space-y-12 max-w-fit'>
                <Purpose formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} selectedCheckbox ={selectedCheckbox}/>
                <Profile formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
                <Address 
                    formData={formData} 
                    handleChange={handleInputChange} 
                    checkboxHandler={checkboxHandler} 
                    handleCheckboxChange={handleMailingCheckboxChange} 
                    isChecked={isChecked} 
                    />
                {isChecked && (
                    <Mailing formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
                )}
                <Personal formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
                <div className='pr-24'>
                    <Buttons type='submit' />
                </div>
            </div>

        </form>
    )
}

export default Form
