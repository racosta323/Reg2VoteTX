function Personal() {
    return (
        <div class='p-4 space-y-12 w-screen '>
            <div class='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
                <div class='flex-initial w-1/3'>
                    <h2 class="text-base font-semibold leading-7 text-gray-900">
                        Personal Information
                    </h2>

                </div>



                <div class='w-full'>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                        <div class="sm:col-span-2">
                            <label for="number" class="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number (Optional) Include Area Code
                            </label>
                            <p class='text-gray-700 text-xs font-normal'>(xxx)-xxx-xxxx</p>
                            <div class='mt-2'>
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="tel" name="number" id="number" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="dob" class="block text-sm font-medium leading-6 text-gray-900">
                                Date of Birth
                            </label>
                            <div class='mt-2'>
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="date" name="dob" id="dob" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="txid" class="block text-sm font-medium leading-6 text-gray-900">
                                TX Driver's Licence No. or TX Personal I.D. No.
                            </label>
                            <div class='mt-2'>
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="txid" id="txid" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>

                                <label for="ssn" class="block text-sm font-medium leading-6 text-gray-900 mt-6">SSN</label>
                                <div class="mt-2">
                                    <input id="ssn" name="ssn" type="text" autocomplete="given_name" class="block w-11/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" />
                                </div>
                            </div>
                        </div>

                        <fieldset>
                            <legend class="text-sm font-semibold leading-6 text-gray-900">Are you a United States Citizen?

                            </legend>
                            <div class="mt-6 space-y-6">
                                <div class="relative flex gap-x-3">
                                    <div class="flex h-6 items-center">
                                        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    </div>
                                    <div class="text-sm leading-6">
                                        <label for="comments" class="font-medium text-gray-900">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div class="relative flex gap-x-3">
                                    <div class="flex h-6 items-center">
                                        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    </div>
                                    <div class="text-sm leading-6">
                                        <label for="comments" class="font-medium text-gray-900">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div class="mt-6 space-y-6">
                                <div class="relative flex gap-x-3">
                                    <div class="flex h-6 items-center">
                                        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    </div>
                                    <div class="text-sm leading-6">
                                        <label for="comments" class="font-medium text-gray-900">I have not been issued a Texas Driver's License/Personal Identification Number or Social Security Number.</label>
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