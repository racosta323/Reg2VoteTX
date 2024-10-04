function Purpose() {
    return (
        <div class='p-4 space-y-12 w-screen '>
            <div class='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
                <div class='flex-initial w-1/3'>
                    <h2 class="text-base font-semibold leading-7 text-gray-900">
                        Purpose
                    </h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">
                        Check off the most applicable reason why you're completing this application
                    </p>
                </div>
                
                <fieldset>
                    <div class="mt-6 space-y-6">
                        <div class="relative flex gap-x-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            </div>
                            <div class="text-sm leading-6">
                                <label for="comments" class="font-medium text-gray-900">
                                    New Application
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
                                <label for="comments" class="font-medium text-gray-900">
                                    Change of Address, Name, or Other Information
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
                                <label for="comments" class="font-medium text-gray-900">
                                    Request for a replacement card
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>                
            </div>
        </div>
    )
}

export default Purpose