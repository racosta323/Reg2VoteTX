function Mailing({ htmlFormData, handleChange, formData }) {
    return (
        <div className='p-4 space-y-12'>
            <div className='border-b border-gray-900/10 pb-12 w-1/2 flex space-x-20 mx-auto'>
                

                <div className='w-full'>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="street_address_2" className="block text-sm font-medium leading-6 text-gray-900">
                                Mailing Address
                            </label>
                            <p className='text-gray-700 text-xs font-normal'>
                                Street Address and Apartment Number. (If mail cannot be delivered to your residence address.)
                            </p>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="street_address_2" id="street_address_2" autoComplete="street_address_2" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.street_address_2}/>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-2 mt-8">
                            <label htmlFor="city_2" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="city_2" id="city_2" autoComplete="city_2" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.city_2}/>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                                State
                            </label>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="state" id="state" autoComplete="state" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.state}/>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <label htmlFor="zip_code_2" className="block text-sm font-medium leading-6 text-gray-900">Zip code</label>
                            <div className="mt-2">
                                <input id="zip_code_2" name="zip_code_2" type="text" autoComplete="given_name" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" onChange={handleChange} value={formData.zip_code_2}/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Mailing