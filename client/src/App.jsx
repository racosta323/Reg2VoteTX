import { useState } from 'react'

import Form from './Form/Form'
import Confirmation from './Confirmation'

import dataKeys from './Form/dataKeys'


function App() {

  const [formData, setFormData] = useState(dataKeys)
  const [click, setClick] = useState(false)

  const [isChecked, setIsChecked] = useState(false)



  return (
    <div className='flex justify-between min-h-screen'>
      <div className='sticky top-0 w-1/3'>
        <header className='sticky top-0'>
          <div className='pb-12 w-5/6 flex space-x-20 mx-auto'>

            <div className='w-full mt-10'>
              <h1 className='text-6xl text-gray-900 mb-5'>Reg2VoteTx</h1>
              <p className='text-gray-500 font-bold mb-10'>Offering a simple way to register to vote in Texas</p>
              <p className='text-gray-900'>
                As of 2024, the State of Texas requires that eligible voters first register to vote in the county in which they reside. Eligible voters must submit a written and signed application "either in person or by mail to the county voter registrar in the county in which the voter resides." (https://www.sos.state.tx.us/elections/).
                <br /><br />
                The State of Texas currently does not have an option to digitally register to vote and eligible voters must complete a
                <a href='https://www.sos.state.tx.us/elections/vr/index.shtml'>PDF form</a>.
                <span className='font-bold'>
                  To participate in any upcoming elections, eligible voters MUST have successfully registered to vote (as outlined above) 30 days PRIOR to the date of the election. (Voters must have registered to vote  on October 7, 2024 to be eligible to vote in the 2024 US elections.)
                </span>
                <br /><br />
                The following form was created to make it easier for eligible voters in Texas to register to vote. Eligible voters can complete the following form, review and submit their entries, then can download the completed form to either mail to or drop off to their <a href='https://www.sos.state.tx.us/elections/voter/votregduties.shtml'>county's Voter Registrar</a>.
                <br /><br />
                Please be aware that browser PDF readers may not display certain completed areas, such as checkboxes. To ensure accuracy, please review your PDF using a separate reader like Adobe. This will also allow you to make any necessary updates directly to the document before printing it.
              </p>
            </div>
          </div>
        </header>
      </div>
      {/* <Form formData={formData} setFormData={setFormData} setClick={setClick} click={click}/>
      <Confirmation formData={formData}/> */}
      {click ? <Confirmation formData={formData} setFormData={setFormData} click={click} setClick={setClick} isChecked={isChecked} setIsChecked={setIsChecked} /> : <Form formData={formData} setFormData={setFormData} setClick={setClick} click={click} isChecked={isChecked} setIsChecked={setIsChecked} />}
    </div>
  )
}

export default App
