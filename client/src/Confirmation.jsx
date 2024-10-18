function Confirmation({ formData, click, setClick, isChecked, setIsChecked }) {

    function reason(data) {
        if (data == '1') {
            return 'New Application'
        }
        if (data == '2') {
            return 'Change of Address, Name, or Other Information'
        }
        if (data == '3') {
            return 'Request for a replacement card'
        }
    }

    function txdl(data) {
        if (data == 'no') {
            return "I have not been issued a TX Driver's License, Personal Identification Number, or Social Security Number"
        }
    }

    function election(data) {
        if (data == 'yes') {
            return "I would like to volunteer to be an election worker"
        }
    }

    function handleClick(){
        setClick(!click)
        if (formData.street_address_2){
            setIsChecked(!isChecked)
        }
    }

    return (
        <div className="max-w-4xl md:max-w-7xl w-full bg-white md:flex flex flex-col">
            <div className="md:mx-auto w-1/2">
                <h1 className="text-gray-700 pb-10 font-bold">REVIEW OPTIONS</h1>
                <table className="table-auto">
                    <tbody>
                        <tr className="border-b-4">
                            <td className="text-gray-700 w-1/2">Reason for completing: </td>
                            <td className="text-gray-700 pl-20">{reason(formData.why)} </td>
                        </tr>

                        <tr>
                            <td className="text-gray-700 pt-4">First Name: </td>
                            <td className="text-gray-700 pl-20">{formData.first_name} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700">Middle Name: </td>
                            <td className="text-gray-700 pl-20">{formData.middle_name} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700">Last Name: </td>
                            <td className="text-gray-700 pl-20">{formData.last_name} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700">Former Name: </td>
                            <td className="text-gray-700 pl-20">{formData.former_name} </td>
                        </tr>
                        <tr className="border-b-4">
                            <td className="text-gray-700">Gender: </td>
                            <td className="text-gray-700 pl-20">{formData.gender.charAt(0).toUpperCase() + formData.gender.substr(1).toLowerCase()} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700 pt-4">Residential Address: </td>
                            <td className="text-gray-700 pl-20">{formData.street_address} {formData.city} {formData.county} {formData.zip_code} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700">Former City and County: </td>
                            <td className="text-gray-700 pl-20">{formData.former_res} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700">Mailing Address: </td>
                            <td className="text-gray-700 pl-20">{formData.street_address_2} {formData.city_2} {formData.state} {formData.zip_code_2} </td>
                        </tr>
                        <tr className="border-b-4">
                            <td className="text-gray-700 ">Phone Number: </td>
                            <td className="text-gray-700 pl-20">{formData.phone} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700 pt-4">Date of Birth: </td>
                            <td className="text-gray-700 pl-20 pt-4">{formData.birth_month} {formData.birth_day} {formData.birth_year} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700">U.S. Citizen: </td>
                            <td className="text-gray-700 pl-20 pt-4">{formData.citizenship.charAt(0).toUpperCase() + formData.citizenship.substr(1).toLowerCase()} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700">TX Driver's License / ID: </td>
                            <td className="text-gray-700 pl-20 pt-4">{formData.license} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700">SSN:</td>
                            <td className="text-gray-700 pl-20">{formData.ssn} </td>
                        </tr>
                        <tr>
                            <td className="text-gray-700"></td>
                            <td className="text-gray-700 pl-20">{txdl(formData.no_id)}</td>
                        </tr>
                        <tr>
                            <td className="text-gray-700"></td>
                            <td className="text-gray-700 py-5 pl-20">{election(formData.election_worker)}</td>

                        </tr>
                    </tbody>
                </table>
                <div className='pr-24 pb-24 flex gap-3 justify-end items-center'>
                    <div className="mt-6 items-center">
                        <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setClick(!click)}>Edit</button>
                    </div>
                    <div className="mt-6 flex items-center justify-end">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation