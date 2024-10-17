import Profile from "./Profile"
import Address from "./Address"
import Personal from "./Personal"
import Purpose from "./Purpose"
import Mailing from "./Mailing"

import { useState } from 'react'
import dataKeys from "./dataKeys"

function Form({ formData, setFormData, setClick, click, isChecked, setIsChecked }) {

    // const [formData, setFormData] = useState(dataKeys)
    // const [url, setUrl] = useState('')
    const [selectedCheckbox, setSelectedCheckbox] = useState(null)
    const [genderCheckbox, setGenderCheckbox] = useState({
        male: false,
        female: false
    })
    const [citizenCheckbox, setCitizenCheckbox] = useState({
        yes: false,
        no: false
    })

    const handleMailingCheckboxChange = (e) => {
        setIsChecked(e.target.checked)
    }

    // function willBe18(dob) {
    //     const birthDate = new Date(dob)
    //     const targetDate = new Date('2024-10-07')

    //     let ageOnTarget = targetDate.getFullYear() - birthDate.getFullYear()
    //     const monthDiff = targetDate.getMonth() - birthDate.getMonth()

    //     if (monthDiff < 0 || (monthDiff === 0 && targetDate.getDate() < birthDate.getDate())) {
    //         ageOnTarget--
    //     }
    //     return ageOnTarget >= 18 ? "yes" : "no"
    // }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name == 'dob') {
            const [year, month, day] = value.split('-')

            // const is18 = willBe18(value)

            setFormData(prevData => ({
                ...prevData,
                'birth_month': month,
                'birth_day': day,
                'birth_year': year,
                // 'voting_age': is18
            }))

        } else if (name !== 'dob') {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }))

        }
    }

    function setCheckBox(e) {
        const { id, name, checked } = e.target
        const validIds = ['new-application', 'change-address', 'replacement-card']

        if (validIds.includes(id)) {
            setSelectedCheckbox(checked ? id : null)
        }

        if (name == 'male' || name == 'female') {
            setGenderCheckbox({
                male: name === 'male' ? checked : false,
                female: name === 'female' ? checked : false
            })
        }

        if (name == 'citizen-yes' || name == 'citizen-no') {
            setCitizenCheckbox({
                yes: name == 'citizen-yes' ? checked : false,
                no: name == 'citizen-no' ? checked : false
            })
        }
    }

    function checkboxHandler(e) {
        const { id, checked } = e.target

        const mapping = {
            'new-application': { key: 'why', value: '1' },
            'change-address': { key: 'why', value: '2' },
            'replacement-card': { key: 'why', value: '3' },
            'citizen-yes': { key: 'citizenship', value: 'yes' },
            'citizen-no': { key: "citizenship", value: "no" },
            "no_id": { key: 'no_id', value: 'no' },
            'election_worker': { key: "election_worker", value: 'yes' },
            'male': { key: 'gender', value: 'male' },
            'female': { key: 'gender', value: 'female' }
        }

        if (id == 'citizen-no') {
            alert("You must be a citizen of the United States to register. Please do not complete if you are not a citizen.")
        }

        const field = mapping[id]

        setCheckBox(e)

        if (field) {
            setFormData(prevData => ({
                ...prevData,
                [field.key]: checked ? field.value : ''
            }))
        }
    }


    const isDisabled = (id) => {
        return selectedCheckbox !== null && selectedCheckbox !== id
    }

    const isGenderDisabled = (id) => {
        if (id === 'male') {
            return genderCheckbox.female
        }
        if (id === 'female') {
            return genderCheckbox.male
        }
        return false
    }

    const isCitizenDisabled = (id) => {
        if (id == 'citizen-yes') {
            return citizenCheckbox.no
        } else if (id == 'citizen-no') {
            return citizenCheckbox.yes
        }
    }

    


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
        <form className="w-full max-w-4xl bg-white md:max-w-7xl md:flex rounded ">
            <div className='p-4 space-y-12 max-w-fit'>
                <Purpose
                    formData={formData}
                    handleChange={handleInputChange}
                    checkboxHandler={checkboxHandler}
                    selectedCheckbox={selectedCheckbox}
                    isDisabled={isDisabled}
                />
                <Profile
                    formData={formData}
                    handleChange={handleInputChange}
                    checkboxHandler={checkboxHandler}
                    isDisabled={isDisabled}
                    isGenderDisabled={isGenderDisabled}
                />
                <Address
                    formData={formData}
                    handleChange={handleInputChange}
                    checkboxHandler={checkboxHandler}
                    handleCheckboxChange={handleMailingCheckboxChange}
                    isChecked={isChecked}
                    isDisabled={isDisabled}
                />
                {isChecked && (
                    <Mailing formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
                )}
                <Personal formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} isCitizenDisabled={isCitizenDisabled} />
                <div className='pr-24'>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>setClick(!click)}>Review Options</button>
                    </div>
                </div>
                
            </div>

        </form>
    )
}

export default Form
