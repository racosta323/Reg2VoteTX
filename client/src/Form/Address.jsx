function Address({ formData, handleChange }) {
    return (
        <div class='p-4 space-y-12'>
            <div class='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
                <div class='flex-initial w-1/3'>
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Address</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                </div>

                <div class='w-full'>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="resAddress" class="block text-sm font-medium leading-6 text-gray-900">
                                Residence Address
                            </label>
                            <p class='text-gray-700 text-xs font-normal'>Street Address and Apartment Number. If none, describe where you live. (Do not include P.O. Box, Rural Rt. or Business Address)</p>
                            <div class='mt-2'>
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="resAddress" id="resAddress" autocomplete="resAddress" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-2 mt-12">
                            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div class='mt-2'>
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="city" id="city" autocomplete="city" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="county" class="block text-sm font-medium leading-6 text-gray-900">
                                County
                            </label>
                            <div class='mt-2'>
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="county" id="county" autocomplete="county" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="zipCode" class="block text-sm font-medium leading-6 text-gray-900">Zip code</label>
                            <div class="mt-2">
                                <input id="zipCode" name="zipCode" type="text" autocomplete="given_name" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" onChange = {handleChange}/>
                            </div>
                        </div>

                    </div>

                    {/* add conditionals here */}
                    <fieldset class='mt-4'>
                        <div class="mt-6 space-y-6">
                            <div class="relative flex gap-x-3">
                                <div class="flex h-6 items-center">
                                    <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
                                </div>
                                <div class="text-sm leading-6">
                                    <label for="comments" class="font-medium text-gray-900 cursor-pointer">
                                        Mailing address different than residence address?
                                    </label>
                                </div>
                            </div>
                            
                        </div>
                    </fieldset>
                </div>



            </div>
        </div>
    )
}

export default Address