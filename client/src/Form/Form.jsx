import Buttons from "../Buttons"
import Profile from "./Profile"
import Address from "./Address"
import Personal from "./Personal"
import Purpose from "./Purpose"
import { useState } from 'react'

function Form() {

    const [formData, setFormData] = useState({
        purpose: "",
        firstName: "",
        middleName: "",
        lastName: "",
        formerName: "",
        resAddress: "", 
        city: "", 
        county: "",
        zipCode: "",
        phone: "",
        txId: "",
        dob: "",
        ssn: "",
        citizen: ""
        
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    console.log(JSON.stringify(formData, null, 2));



    return (
        <form class='max-w-fit'>
            <div class='p-4 space-y-12 max-w-fit'>
                <Purpose formData={formData} handleChange={handleInputChange}/>
                <Profile formData={formData} handleChange={handleInputChange}/>
                <Address formData={formData} handleChange={handleInputChange}/>
                <Personal formData={formData} handleChange={handleInputChange}/>
                <div class='pr-24'>
                    <Buttons />
                </div>
            </div>
            
        </form>
    )
}

export default Form
