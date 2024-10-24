import { useState, useEffect } from 'react'
import Mailing from "./Mailing"

function Address({ formData, handleChange, isChecked, setIsChecked, handleKeyDown, setFormData }) {


    const handleCheck = (e) => {
        if (isChecked) {
            setFormData(prevData => ({
                ...prevData,
                "street_address_2": "",
                "city_2": "",
                "state": "",
                "zip_code_2": "",
            }))
            setIsChecked(!isChecked)
        } else {
            setIsChecked(!isChecked)
        }

    }

    return (
        <div className='p-4 space-y-12'>
            <div className='border-b border-gray-900/10 pb-12 w-5/6 flex space-x-20 mx-auto'>


                <div className='w-full'>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="street_address" className="block text-sm font-medium leading-6 text-gray-900">
                                Residence Address
                            </label>
                            <p className='text-gray-700 text-xs font-normal'>Street Address and Apartment Number. If none, describe where you live. (Do not include P.O. Box, Rural Rt. or Business Address)</p>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="street_address" id="street_address" autoComplete="street_address" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.street_address} />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-2 mt-12">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="city" id="city" autoComplete="city" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.city} />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="county" className="block text-sm font-medium leading-6 text-gray-900">
                                County
                            </label>
                            <div className='mt-2'>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="county" id="county" autoComplete="county" className="block w-full rounded-md border-0 bg-transparent p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={formData.county} />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-1">
                            <label htmlFor="zip_code" className="block text-sm font-medium leading-6 text-gray-900">Zip code</label>
                            <div className="mt-2">
                                <input id="zip_code" name="zip_code" type="text" autoComplete="given_name" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" onChange={handleChange} value={formData.zip_code} />
                            </div>
                        </div>

                    </div>

                    <div className="sm:col-span-1 mt-10">
                        <label htmlFor="former_res" className="block text-sm font-medium leading-6 text-gray-900">City and County of Former Residence in Texas</label>
                        <div className="mt-2">
                            <input id="former_res" name="former_res" type="text" autoComplete="given_name" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent" onChange={handleChange} value={formData.former_res} />
                        </div>
                    </div>

                    <fieldset className='mt-4'>
                        <div className="mt-6 space-y-6">
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="mailing"
                                        name="mailing"
                                        type="checkbox"
                                        checked={isChecked}
                                        className="custom-checkbox"
                                        onChange={handleCheck}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="mailing" className="font-medium text-gray-900 cursor-pointer">
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