function Confirmation({ formData }){

    console.log(formData)

    return(
        <div>
            <p className="text-gray-700">Reason for completing: {formData.why}</p>
            <br/>
            <p className="text-gray-700">First Name: {formData.first_name}</p>
            <p className="text-gray-700">Middle Name: {formData.middle_name}</p>
            <p className="text-gray-700">Last Name: {formData.last_name}</p>
            <p className="text-gray-700">Former Name: {formData.former_name}</p>
            <br/>
            <p className="text-gray-700">Gender: {formData.gender}</p>
            <p className="text-gray-700">Residential Address: {formData.street_address}, {formData.city} {formData.county} {formData.zip_code}</p>
            <p className="text-gray-700">Former City and County: {formData.former_res}</p>
            <br/>
            <p className="text-gray-700">Mailing Address: {formData.street_address_2} {formData.city_2} {formData.state} {formData.zip_code_2}</p>
            <p className="text-gray-700">Residential Address: {formData.street_address}, {formData.city} {formData.county} {formData.zip_code}</p>
            <p className="text-gray-700">Former City and County: {formData.former_res}</p>
            <br/>
            <p className="text-gray-700">Date of Birth: {formData.birth_month} {formData.birth_day} {formData.birth_year}</p>
            <p className="text-gray-700">Phone Number: {formData.phone}</p>
            <p className="text-gray-700">TX Driver's License / ID: {formData.license}</p>
            <p className="text-gray-700">SSN: {formData.ssn}</p>
            <p className="text-gray-700">I have not been issued a TX Driver's License, Personal Identification Number, or Social Security Number: {formData.no_id}</p>
            <br/>
            <p className="text-gray-700">I would like to volunteer to be an election worker: {formData.election_worker}</p>
            
        </div>
    )
}

export default Confirmation