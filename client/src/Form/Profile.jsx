function Profile({ formData, handleChange, checkboxHandler }) {
    return (
        <div class='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
            <div class='flex-initial w-1/3'>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
            </div>

            <div class='w-full'>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first_name" class="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div class='mt-2'>
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="first_name" id="first-name" autoComplete="given-name" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.first_name} />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="middle_name" class="block text-sm font-medium leading-6 text-gray-900">
                            Middle name (if applicable)
                        </label>
                        <div class='mt-2'>
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="middle_name" id="middle_name" autoComplete="given-name" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last_name" class="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div class='mt-2'>
                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input type="text" name="last_name" id="last_name" autoComplete="last_name" class="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="former_name" class="block text-sm font-medium leading-6 text-gray-900">Former name (if any)</label>
                        <div class="mt-2">
                            <input id="former_name" name="former_name" type="text" autoComplete="given_name" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" onChange={handleChange} />
                        </div>
                    </div>


                </div>
                <fieldset className="mt-14">
                    <legend class="text-sm font-semibold leading-6 text-gray-900">What gender do you identify as? (Optional)
                    </legend>
                    <div class="mt-6 space-y-6">
                        <div class="relative flex gap-x-3">
                            <div class="flex h-6 items-center">
                                <input id="male" name="male" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" onChange={(e) => checkboxHandler(e)} />
                            </div>
                            <div class="text-sm leading-6">
                                <label for="male" class="font-medium text-gray-900 cursor-pointer">
                                    Male
                                </label>
                            </div>
                        </div>
                        <div class="relative flex gap-x-3">
                            <div class="flex h-6 items-center">
                                <input id="female" name="female" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" onChange={(e) => checkboxHandler(e)} />
                            </div>
                            <div class="text-sm leading-6">
                                <label for="female" class="font-medium text-gray-900 cursor-pointer">
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