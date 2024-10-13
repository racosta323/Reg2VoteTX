import { useState } from 'react'



function Purpose({ checkboxHandler, disabled, selectedCheckbox }) {


    return (
        <div className='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
            <div className='flex-initial w-1/3'>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Purpose</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
            </div>


            <div className='w-full'>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Check off the most applicable reason why you're completing this application
                </p>


                <fieldset>
                    <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input 
                                    id="new-application" 
                                    name="new-application" 
                                    type="checkbox" 
                                    className="h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" 
                                    onChange={(e) => checkboxHandler(e)} 
                                    disabled={selectedCheckbox && selectedCheckbox !== 'new-application' }
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="new-application" className="font-medium text-gray-900 cursor-pointer">
                                    New Application
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input 
                                    id="change-address" 
                                    name="change-address" 
                                    type="checkbox" 
                                    className="h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" 
                                    onChange={(e) => checkboxHandler(e)} 
                                    disabled={selectedCheckbox && selectedCheckbox !== 'change-address'}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="change-address" className="font-medium text-gray-900 cursor-pointer">
                                    Change of Address, Name, or Other Information
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input 
                                    id="replacement-card" 
                                    name="replacement-card" 
                                    type="checkbox" 
                                    className="h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" 
                                    onChange={(e) => checkboxHandler(e)} 
                                    disabled={selectedCheckbox && selectedCheckbox !== 'replacement-card' }
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="replacement-card" className="font-medium text-gray-900 cursor-pointer">
                                    Request for a replacement card
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <p className="mt-14 text-sm leading-6 text-gray-600">
                    
                </p>


                <fieldset>
                    <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input id="election_worker" name="election_worker" type="checkbox" className="h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" onChange={(e) => checkboxHandler(e)} />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="election_worker" className="font-bold text-gray-900 cursor-pointer">
                                    Check here if you would like to volunteer to be an election worker
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