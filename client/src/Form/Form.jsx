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
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
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

            if (response.ok){
                const blob = await response.blob()

                setUrl(window.URL.createObjectURL(blob))
                
                const link = document.createElement('a')
                link.href = url
                link.download = 'rene.pdf'
                link.click()
                link.remove()

            } else {
                console.log("Failed to download file.", response.statusText)
            }

        } catch (error) {
            console.log(error)
        }
        // console.log(JSON.stringify(formData, null, 2));


    }



    return (
        <form class='max-w-fit' onSubmit={handleSubmit}>
            <div class='p-4 space-y-12 max-w-fit'>
                <Purpose formData={formData} handleChange={handleInputChange}/>
                <Profile formData={formData} handleChange={handleInputChange}/>
                <Address formData={formData} handleChange={handleInputChange}/>
                <Personal formData={formData} handleChange={handleInputChange}/>
                <div class='pr-24'>
                    <Buttons type='submit'/>
                </div>
            </div>
            
        </form>
    )
}

export default Form
