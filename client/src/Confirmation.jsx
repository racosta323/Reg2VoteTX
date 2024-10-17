function Confirmation({ formData }) {


    return (
        <div className="w-full max-w-4xl bg-white shadow-md md:max-w-7xl md:flex rounded flex flex-col">
            <div className=''>
                <p className="text-gray-700">Reason for completing: {formData.why}</p>
                <br />
                <p className="text-gray-700">First Name: {formData.first_name}</p>
                <p className="text-gray-700">Middle Name: {formData.middle_name}</p>
                <p className="text-gray-700">Last Name: {formData.last_name}</p>
                <p className="text-gray-700">Former Name: {formData.former_name}</p>
                <br />
                <p className="text-gray-700">Gender: {formData.gender}</p>
                <p className="text-gray-700">Residential Address: {formData.street_address}, {formData.city} {formData.county} {formData.zip_code}</p>
                <p className="text-gray-700">Former City and County: {formData.former_res}</p>
                <br />
                <p className="text-gray-700">Mailing Address: {formData.street_address_2} {formData.city_2} {formData.state} {formData.zip_code_2}</p>
                <p className="text-gray-700">Residential Address: {formData.street_address}, {formData.city} {formData.county} {formData.zip_code}</p>
                <p className="text-gray-700">Former City and County: {formData.former_res}</p>
                <br />
                <p className="text-gray-700">Date of Birth: {formData.birth_month} {formData.birth_day} {formData.birth_year}</p>
                <p className="text-gray-700">Phone Number: {formData.phone}</p>
                <p className="text-gray-700">TX Driver's License / ID: {formData.license}</p>
                <p className="text-gray-700">SSN: {formData.ssn}</p>
                <p className="text-gray-700">I have not been issued a TX Driver's License, Personal Identification Number, or Social Security Number: {formData.no_id}</p>
                <br />
                <p className="text-gray-700">I would like to volunteer to be an election worker: {formData.election_worker}</p>
                <div className='pr-24'>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation