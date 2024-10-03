function Form() {
    return (
        <form>
            <div class='p-4 space-y-12 w-screen '>

                {/* profile */}
                <div class='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
                    <div class='flex-initial w-1/3'>
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div class='w-full'>
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div class='mt-2'>
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="middle-name" class="block text-sm font-medium leading-6 text-gray-900">
                                    Middle name (if applicable)
                                </label>
                                <div class='mt-2'>
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="middle-name" id="middle-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div class='mt-2'>
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="last-name" id="last-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="former-name" class="block text-sm font-medium leading-6 text-gray-900">Former name (if any)</label>
                                <div class="mt-2">
                                    <input id="former-name" name="former-name" type="text" autocomplete="given_name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Address */}
            <div class='p-4 space-y-12 w-screen '>
                <div class='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
                    <div class='flex-initial w-1/3'>
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Address</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div class='w-full'>
                        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="address" class="block text-sm font-medium leading-6 text-gray-900">
                                    Residence Address
                                </label>
                                <p class='text-gray-700 text-xs font-normal'>Street Address and Apartment Number. If none, describe where you live. (Do not include P.O. Box, Rural Rt. or Business Address)</p>
                                <div class='mt-2'>
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="address" id="address" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-2 mt-12">
                                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div class='mt-2'>
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="city" id="city" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="county" class="block text-sm font-medium leading-6 text-gray-900">
                                    County
                                </label>
                                <div class='mt-2'>
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="county" id="county" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <label for="zip-code" class="block text-sm font-medium leading-6 text-gray-900">Zip code</label>
                                <div class="mt-2">
                                    <input id="zip-code" name="zip-code" type="text" autocomplete="given_name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </form>
    )
}

export default Form
