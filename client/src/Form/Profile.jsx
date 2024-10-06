function Profile({ formData, handleChange }) {
    return (
        <div class='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
            <div class='flex-initial w-1/3'>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
            </div>

            <div class='w-full'>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div class='mt-2'>
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="firstName" id="first-name" autoComplete="given-name" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {handleChange} value={formData.firstName}/>
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="middleName" class="block text-sm font-medium leading-6 text-gray-900">
                            Middle name (if applicable)
                        </label>
                        <div class='mt-2'>
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="middleName" id="middleName" autoComplete="given-name" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {handleChange} />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div class='mt-2'>
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="lastName" id="lastName" autoComplete="lastName" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {handleChange}/>
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="formerName" class="block text-sm font-medium leading-6 text-gray-900">Former name (if any)</label>
                        <div class="mt-2">
                            <input id="formerName" name="formerName" type="text" autoComplete="given_name" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" onChange = {handleChange}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile