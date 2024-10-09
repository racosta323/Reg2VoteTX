function Mailing({ formData, handleChange }) {
    return (
        <div class='p-4 space-y-12'>
            <div class='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
                <div class='flex-initial w-1/3'>
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Mailing Address</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                </div>

                <div class='w-full'>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="street_address_2" class="block text-sm font-medium leading-6 text-gray-900">
                                Mailing Address
                            </label>
                            <p class='text-gray-700 text-xs font-normal'>
                                Street Address and Apartment Number. (If mail cannot be delivered to your residence address.)
                            </p>
                            <div class='mt-2'>
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="street_address_2" id="street_address_2" autocomplete="street_address_2" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-2 mt-8">
                            <label for="city_2" class="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div class='mt-2'>
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="city_2" id="city_2" autocomplete="city_2" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="state" class="block text-sm font-medium leading-6 text-gray-900">
                                State
                            </label>
                            <div class='mt-2'>
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="state" id="state" autocomplete="state" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="zip_code_2" class="block text-sm font-medium leading-6 text-gray-900">Zip code</label>
                            <div class="mt-2">
                                <input id="zip_code_2" name="zip_code_2" type="text" autocomplete="given_name" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mailing