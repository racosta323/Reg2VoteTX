import { useState } from 'react'

import Form from './Form/Form'
import Confirmation from './Confirmation'

import dataKeys from './Form/dataKeys'


function App() {

  const [formData, setFormData] = useState(dataKeys)
  const [click, setClick] = useState(false)


  return (
    <div className='flex flex-col justify-center items-center min-h-screen '>
      <header className='w-full max-w-4xl md:max-w-7xl w-5/6 flex flex-col space-x-20 sticky top-0 z-50 bg-gray-100 '>
        <div className='pb-12 w-1/2 flex space-x-20 mx-auto'>
          
          <div className='w-full mt-10'>
            <h1 className='text-6xl text-gray-900 mb-5'>Reg2VoteTx</h1>
            <p className='text-gray-500 font-bold mb-10'>Offering a simple way to register to vote in Texas</p>
            <p className='text-gray-900'>
              In the year 2024, the State of Texas requires "that a person submit an application either in person or by mail to the county voter registrar in the county in which the voter resides. The application must be in writing and signed by the applicant." (https://www.sos.state.tx.us/elections/vr/index.shtml).
              https://www.sos.state.tx.us/elections/

            </p>
          </div>
          
        </div>
      </header>
      <Form formData={formData} setFormData={setFormData} setClick={setClick} click={click}/>
      <Confirmation formData={formData}/>
      {/* {click ? <Confirmation formData={formData} /> : <Form formData={formData} setFormData={setFormData} setClick={setClick} click={click} />} */}
    </div>
  )
}

export default App
