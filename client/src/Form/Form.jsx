import Profile from "./Profile"
import Address from "./Address"
import Personal from "./Personal"
import Purpose from "./Purpose"
import Mailing from "./Mailing"

import { useState } from 'react'
import dataKeys from "./dataKeys"

function Form({ formData, setFormData, setClick, click, isChecked, setIsChecked }) {

    const [ selectedCheckbox, setSelectedCheckbox ] = useState(null)
    const [ genderCheckbox, setGenderCheckbox ] = useState({
        male: false,
        female: false
    })
    const [citizenCheckbox, setCitizenCheckbox] = useState({
        yes: false,
        no: false
    })

    const [ noIdCheckbox, setNoIdCheckbox ] = useState(false)


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

    function setCheckBox(e) {
        const { id, name, checked } = e.target
        const validIds = ['new-application', 'change-address', 'replacement-card']
        if (validIds.includes(id)) {
            setSelectedCheckbox(checked ? id : null)
        }
        
        if (name == 'male' || name == 'female') {
            setGenderCheckbox(prevState=>({
                ...prevState,
                [name]: checked
            }))
        }
        
        if (name == 'citizen-yes' || name == 'citizen-no') {
            console.log('Checkbox clicked:', e.target.name, e); // Log for debugging
            
            setCitizenCheckbox({
                yes: name == 'citizen-yes' ? checked : false,
                no: name == 'citizen-no' ? checked : false
            })
        }

        if (name == 'no_id'){
            setNoIdCheckbox(!noIdCheckbox)
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

        // calls function to return boolean val for checkboxes
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

    const handleKeyDown =(e) => {
        let id = e.target.id
        if (e.key == 'Enter'){
            e.preventDefault()
            e.target.click()
            
        }
    }


    return (

        <form className="m-2 p-4 h-auto bg-white rounded shadow-xl" onSubmit={(e)=>{e.preventDefault()}}>
            <Purpose
                formData={formData}
                handleChange={handleInputChange}
                checkboxHandler={checkboxHandler}
                selectedCheckbox={selectedCheckbox}
                isDisabled={isDisabled}
                handleKeyDown={handleKeyDown}
                
            />
            <Profile
                formData={formData}
                handleChange={handleInputChange}
                checkboxHandler={checkboxHandler}
                isDisabled={isDisabled}
                isGenderDisabled={isGenderDisabled}
                genderCheckbox={genderCheckbox}
                setGenderCheckbox={setGenderCheckbox}
                handleKeyDown={handleKeyDown}
            />
            <Address
                formData={formData}
                setFormData={setFormData}
                handleChange={handleInputChange}
                checkboxHandler={checkboxHandler}
                handleKeyDown={handleKeyDown}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                isDisabled={isDisabled}
            />
            {isChecked && (
                <Mailing formData={formData} handleChange={handleInputChange} checkboxHandler={checkboxHandler} />
            )}
            <Personal 
                formData={formData} 
                setFormData={setFormData}
                handleChange={handleInputChange} 
                checkboxHandler={checkboxHandler} 
                isCitizenDisabled={isCitizenDisabled} 
                setCitizenCheckbox={setCitizenCheckbox}
                citizenCheckbox={citizenCheckbox}
                setNoIdCheckbox={setNoIdCheckbox}
                noIdCheckbox={noIdCheckbox}
                handleKeyDown={handleKeyDown}
            />
            <div className='pr-24'>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setClick(!click)}>Review Options</button>
                </div>
            </div>
        </form >

    )
}

export default Form
