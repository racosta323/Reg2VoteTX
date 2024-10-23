import { useState, useEffect } from 'react'
import Form from './Form'

function Purpose({ checkboxHandler, selectedCheckbox, isDisabled, formData }) {

    const [ checked, setChecked ] = useState({
        'new-application': false,
        'change-address': false,
        'replacement-card': false,
        'election_worker': false
    })


    useEffect(()=>{
        setChecked({
            'new-application': formData.why === '1',
            'change-address': formData.why === '2',
            'replacement-card': formData.why === '3',
            'election_worker': formData.election_worker === 'yes'
        })
    }, [formData])

    const handleKeyDown =(e) => {
        let id = e.target.id
        if (e.key == 'Enter'){
            console.log(id)
            setChecked(prevState => ({
                ...prevState,
                [id]: !prevState[id]
            }))
        }
    }

    const checkboxClass = "custom-checkbox cursor-pointer"
    const labelClass = 'font-medium text-gray-900 cursor-pointer'
    const isNewDisabled = isDisabled('new-application')
    const isChangeDisabled = isDisabled('change-address')
    const isReplacementDisabled = isDisabled('replaement-card')



    return (
        <div className='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20 mx-auto'>
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
                                    checked={checked["new-application"]}
                                    className='custom-checkbox'
                                    onChange={(e) => checkboxHandler(e)}
                                    disabled = {isNewDisabled}
                                    style={{cursor: isNewDisabled ? 'not-allowed' : 'pointer'}}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label 
                                    htmlFor="new-application" 
                                    className={labelClass}
                                    style = {{
                                        color: isNewDisabled ? "grey" : "black", 
                                        cursor: isNewDisabled ? 'not-allowed' : 'pointer'
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
                                    checked={checked["change-address"]}
                                    type="checkbox"
                                    className="custom-checkbox"
                                    onChange={(e) => checkboxHandler(e)}
                                    disabled = {isChangeDisabled}
                                    style={{cursor: isChangeDisabled ? 'not-allowed' : 'pointer'}}
                                    onKeyDown={handleKeyDown}                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label 
                                    htmlFor="change-address" 
                                    className={labelClass}  
                                    style = {{
                                        color: isChangeDisabled ? "grey" : "black", 
                                        cursor: isChangeDisabled ? 'not-allowed' : 'pointer'
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
                                    checked={checked["replacement-card"]}
                                    className="custom-checkbox"
                                    disabled = {isReplacementDisabled}
                                    onChange={(e) => checkboxHandler(e)}
                                    style={{cursor: isReplacementDisabled ? 'not-allowed' : 'pointer'}}
                                    onKeyDown={handleKeyDown}                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label 
                                    htmlFor="replacement-card" 
                                    className={labelClass}  
                                    style = {{
                                        color: isReplacementDisabled ? "grey" : "black",
                                        cursor: isReplacementDisabled ? 'not-allowed' : 'pointer'
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
                                    checked={checked["election_worker"]}
                                    className={checkboxClass}
                                    onChange={(e) => checkboxHandler(e)} 
                                    onKeyDown={handleKeyDown}                                />
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