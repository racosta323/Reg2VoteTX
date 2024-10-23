import { useEffect } from 'react'

function Profile({ formData, handleChange, checkboxHandler, isDisabled, isGenderDisabled, genderCheckbox, setGenderCheckbox, handleKeyDown }) {

    const isGenderDisabledMale = isGenderDisabled('male')
    const isGenderDisabledFemale = isGenderDisabled('female')

    useEffect(()=>{
        setGenderCheckbox({
            male: formData.gender == 'male',
            female: formData.gender == 'female'
        })
    }, [formData])

    

    return (
        <div className='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20 mx-auto'>
            <div className='w-full'>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div className='mt-2'>
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="first_name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.first_name} />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="middle_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Middle name (if applicable)
                        </label>
                        <div className='mt-2'>
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="middle_name" id="middle_name" autoComplete="given-name" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.middle_name}/>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className='mt-2'>
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="last_name" id="last_name" autoComplete="last_name" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.last_name}/>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="former_name" className="block text-sm font-medium leading-6 text-gray-900">Former name (if any)</label>
                        <div className="mt-2">
                            <input id="former_name" name="former_name" type="text" autoComplete="given_name" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" onChange={handleChange} value={formData.former_name}/>
                        </div>
                    </div>


                </div>
                <fieldset className="mt-14">
                    <legend className="text-sm font-semibold leading-6 text-gray-900">What gender do you identify as? (Optional)
                    </legend>
                    <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input 
                                    id="male" 
                                    name="male" 
                                    type="checkbox" 
                                    className="custom-checkbox" 
                                    checked={genderCheckbox['male']}
                                    onChange={(e) => checkboxHandler(e)} 
                                    disabled = {isGenderDisabledMale}
                                    style={{cursor: isGenderDisabledMale ? 'not-allowed' : 'pointer'}}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label 
                                    htmlFor="male" 
                                    className="font-medium text-gray-900"
                                    style = {{
                                        color: isGenderDisabledMale ? "grey" : "black", 
                                        cursor: isGenderDisabledMale ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    Male
                                </label>
                            </div>
                        </div>
                        <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input 
                                    id="female" 
                                    name="female" 
                                    type="checkbox" 
                                    checked={genderCheckbox['female']}
                                    className="custom-checkbox" 
                                    onChange={(e) => checkboxHandler(e)} 
                                    disabled = {isGenderDisabledFemale}
                                    style={{cursor: isGenderDisabledFemale ? 'not-allowed' : 'pointer'}}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label 
                                    htmlFor="female" 
                                    className="font-medium text-gray-900 cursor-pointer"
                                    style = {{
                                        color: isGenderDisabledFemale ? "grey" : "black", 
                                        cursor: isGenderDisabledFemale ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            
        </div>
    )
}

export default Profile