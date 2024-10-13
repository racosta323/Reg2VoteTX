function Personal({ formData, handleChange, checkboxHandler }) {
    return (
        <div className='p-4 space-y-12'>
            <div className='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
                <div className='flex-initial w-1/3'>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Personal Information
                    </h2>

                </div>



                <div className='w-full'>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                        <div className="sm:col-span-2">
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number (Optional) Include Area Code
                            </label>
                            <p className='text-gray-700 text-xs font-normal'>(xxx)-xxx-xxxx</p>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="tel" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="(xxx)-xxx-xxxx" onChange = {handleChange} value = {formData.phone}/>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                Date of Birth
                            </label>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="date" name="dob" id="dob" autoComplete="date" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="license" className="block text-sm font-medium leading-6 text-gray-900">
                                TX Driver's Licence No. or TX Personal I.D. No.
                            </label>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="license" id="license" autoComplete="given-name" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {handleChange}/>
                                </div>

                                <label htmlFor="ssn" className="block text-sm font-medium leading-6 text-gray-900 mt-6">SSN</label>
                                <p className='text-gray-700 text-xs font-normal'>
                                    last 4 digits only
                                </p>
                                <div className="mt-2">
                                    <input id="ssn" name="ssn" type="text" autoComplete="ssn" className="block w-11/12 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" placeholder="xxxx" onChange = {handleChange}/>
                                </div>
                            </div>
                        </div>

                        <fieldset>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Are you a United States Citizen?
                            </legend>
                            <div className="mt-6 space-y-6">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input id="citizen-yes" name="citizen-yes" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" onChange={(e) => checkboxHandler(e)}/>
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="citizen-yes" className="font-medium text-gray-900 cursor-pointer">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input id="citizen_no" name="citizen_no" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" onChange={(e) => checkboxHandler(e)}/>
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="citizen_no" className="font-medium text-gray-900 cursor-pointer">
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
                                        <input id="no_id" name="no_id" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" onChange={(e) => checkboxHandler(e)}/>
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="no_id" className="font-medium text-gray-900 cursor-pointer">
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