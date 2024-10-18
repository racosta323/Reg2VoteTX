import { useState } from 'react'

function Personal({ formData, handleChange, checkboxHandler, isCitizenDisabled }) {

    const [phoneValue, setPhoneValue] = useState('')

    function phoneFormat(value) {
        const cleanedValue = value.replace(/\D/g, '')

        const formattedValue = cleanedValue
            .replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3')
            .replace(/(\(\d{3}\))(\d{0,3})(\d{0,4})/, (_, area, firstPart, secondPart) => {
                if (secondPart) return `(${area} ${firstPart} - ${secondPart})`
                if (firstPart) return `${area} ${firstPart}`
                return `${area}`
            })
        return formattedValue
    }



    const handlePhoneChange = (e) => {
        const value = e.target.value
        const formattedValue = phoneFormat(value)
        setPhoneValue(formattedValue)
        handleChange(e)
    }


    return (
        <div className='p-4 space-y-12'>
            <div className='border-b border-gray-900/10 pb-12 w-1/2 flex space-x-20 mx-auto'>

                <div className='w-full'>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                        <div className="sm:col-span-2">
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number (Optional) Include Area Code
                            </label>
                            <p className='text-gray-700 text-xs font-normal'>(xxx)-xxx-xxxx</p>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="tel" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="(xxx)-xxx-xxxx" onChange={handlePhoneChange} value={formData.phone} />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                Date of Birth
                            </label>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="date" name="dob" id="dob" autoComplete="date" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={`${formData.birth_year}-${formData.birth_month}-${formData.birth_day}`}/>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="license" className="block text-sm font-medium leading-6 text-gray-900">
                                TX Driver's Licence No. or TX Personal I.D. No.
                            </label>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="license" id="license" autoComplete="given-name" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.license}/>
                                </div>

                                <label htmlFor="ssn" className="block text-sm font-medium leading-6 text-gray-900 mt-6">SSN</label>
                                <p className='text-gray-700 text-xs font-normal'>
                                    (If no TX driver's license or personal identification. Last 4 digits only.)
                                </p>
                                <div className="mt-2">
                                    <input id="ssn" name="ssn" type="text" autoComplete="ssn" className="block w-11/12 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" placeholder="xxxx" onChange={handleChange} value={formData.ssn}/>
                                </div>
                            </div>
                        </div>

                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Are you a United States Citizen?
                            </legend>
                            <div className="mt-6 space-y-6">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input 
                                            id="citizen-yes" 
                                            name="citizen-yes" 
                                            type="checkbox" className="custom-checkbox" 
                                            onChange={(e) => checkboxHandler(e)}
                                            checked={formData.citizenship}
                                            disabled={isCitizenDisabled('citizen-yes')}
                                            style = {{cursor: isCitizenDisabled('citizen-yes')? 'not-allowed' : "pointer"}}
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="citizen-yes" className="font-medium text-gray-900 cursor-pointer"
                                         style = {{
                                            color: isCitizenDisabled("citizen-yes") ? "grey" : "black", 
                                            cursor: isCitizenDisabled("citizen-yes") ? 'not-allowed' : 'pointer'
                                        }}
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input id="citizen-no" name="citizen-no" type="checkbox" className="custom-checkbox" onChange={(e) => checkboxHandler(e)}
                                            disabled={isCitizenDisabled("citizen-no")}
                                            style = {{cursor: isCitizenDisabled('citizen-no')? 'not-allowed' : "pointer"}}
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="citizen-no" className="font-medium text-gray-900 cursor-pointer"
                                        style = {{
                                            color: isCitizenDisabled("citizen-no") ? "grey" : "black", 
                                            cursor: isCitizenDisabled("citizen-no") ? 'not-allowed' : 'pointer'
                                        }}
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="mt-6 space-y-6">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input id="no_id" name="no_id" type="checkbox" className="custom-checkbox" onChange={(e) => checkboxHandler(e)} checked={formData.no_id}/>
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="no_id" className="font-medium text-gray-900 cursor-pointer"
                                        >
                                            I have not been issued a Texas Driver's License/Personal Identification Number or Social Security Number.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Personal