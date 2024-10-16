import { useState } from 'react'

function Purpose({ checkboxHandler, selectedCheckbox, isDisabled }) {

    

    const checkboxClass = "custom-checkbox cursor-pointer"
    const labelClass = 'font-medium text-gray-900 cursor-pointer'

    return (
        <div className='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
            <div className='flex-initial w-1/3'></div>

            <div className='w-full mt-10'>

                <p className="mt-1 text-md leading-6 text-gray-600">
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
                                    className='custom-checkbox'
                                    onChange={(e) => checkboxHandler(e)}
                                    disabled = {isDisabled('new-application')}
                                    style={{cursor: isDisabled("new-application") ? 'not-allowed' : 'pointer'}}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label 
                                    htmlFor="new-application" 
                                    className={labelClass}
                                    style = {{
                                        color: isDisabled("new-application") ? "grey" : "black", 
                                        cursor: isDisabled("new-application") ? 'not-allowed' : 'pointer'
                                    }}
                                >
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
                                    className="custom-checkbox"
                                    onChange={(e) => checkboxHandler(e)}
                                    disabled = {isDisabled('change-address')}
                                    style={{cursor: isDisabled("change-address") ? 'not-allowed' : 'pointer'}}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label 
                                    htmlFor="change-address" 
                                    className={labelClass}  
                                    style = {{
                                        color: isDisabled("change-address") ? "grey" : "black", 
                                        cursor: isDisabled("change-address") ? 'not-allowed' : 'pointer'
                                    }}
                                >
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
                                    className="custom-checkbox"
                                    disabled = {isDisabled('replacement-card')}
                                    onChange={(e) => checkboxHandler(e)}
                                    style={{cursor: isDisabled("replacement-card") ? 'not-allowed' : 'pointer'}}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label 
                                    htmlFor="replacement-card" 
                                    className={labelClass}  
                                    style = {{
                                        color: isDisabled("replacement-card") ? "grey" : "black",
                                        cursor: isDisabled("replacement-card") ? 'not-allowed' : 'pointer'
                                    }}
                                >
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
                                <input
                                    id="election_worker"
                                    name="election_worker"
                                    type="checkbox"
                                    className={checkboxClass}
                                    onChange={(e) => checkboxHandler(e)} 
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="election_worker" className="font-bold text-gray-900 cursor-pointer" >
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