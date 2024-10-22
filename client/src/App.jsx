import { useState } from 'react'
import ShareButton from './ShareButton'

import Form from './Form/Form'
import Confirmation from './Confirmation'

import dataKeys from './Form/dataKeys'
import { FaFacebookSquare } from "react-icons/fa"

function App() {

  const [formData, setFormData] = useState(dataKeys)
  const [click, setClick] = useState(false)

  const [isChecked, setIsChecked] = useState(false)



  return (
    <div className='flex flex-col md:flex-row justify-between min-h-screen shadow-xl'>
      
      <header className='relative md:w-1/3 m-5'>
        <div className='flex flex-col space-x-0 md:space-x-20 mx-auto md:sticky md:top-0'>
          <div className='m-10'>
            <h1 className='text-4xl md:text-6xl text-gray-900 mb-5'>Reg2VoteTx</h1>
            <p className='text-gray-500 font-bold'>Offering a simple way to register to vote in Texas</p>
            <div className='mb-5 mt-2 flex flex-col'>
              <div className='my-5'>
                <p className='text-gray-500'>Share with your network!</p>
                <ShareButton type={"facebook"} />
                <ShareButton type={"twitter"} />
                <ShareButton type={"linkedIn"} />
                <ShareButton type={"email"} />
              </div>
            </div>

            <p className='text-gray-900'>
              As of 2024, the State of Texas requires that eligible voters first register to vote in the county in which they reside. Eligible voters must submit a written and signed application "either in person or by mail to the county voter registrar in the county in which the voter resides." (<a href='https://www.sos.state.tx.us/elections/'>https://www.sos.state.tx.us/elections/</a>).
              <br /><br />
              The State of Texas currently does not have an option to digitally register to vote and eligible voters must complete a
              <a href='https://www.sos.state.tx.us/elections/vr/index.shtml'>PDF form</a>.
              <span className='font-bold'>
                To participate in any upcoming elections, eligible voters MUST have successfully registered to vote (as outlined above) 30 days PRIOR to the date of the election. (Voters must have registered to vote on October 7, 2024, to be eligible to vote in the 2024 US elections.)
              </span>
              <br /><br />
              The following form was created to make it easier for eligible voters in Texas to register to vote. Eligible voters can complete the following form, review and submit their entries, then can download the completed form to either mail to or drop off to their <a href='https://www.sos.state.tx.us/elections/voter/votregduties.shtml'>county's Voter Registrar</a>.
              <br /><br />
              Please be aware that browser PDF readers may not display certain completed areas, such as checkboxes. To ensure accuracy, please review your PDF using a separate reader like Adobe. This will also allow you to make any necessary updates directly to the document before printing it.
            </p>
          </div>

          <div className=''>
            <button type='button' className='rounded-md bg-indigo-600 p-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Share your thoughts with the developer
            </button>
          </div>
        </div>
      </header>

      {/* <Form formData={formData} setFormData={setFormData} setClick={setClick} click={click}/>
      <Confirmation formData={formData}/> */}
      < div className='w-full md:w-2/3 m-5' >
        {
          click ? (
            <Confirmation
              formData={formData}
              setFormData={setFormData}
              click={click}
              setClick={setClick}
              isChecked={isChecked}
              etIsChecked={setIsChecked}
            />
          ) : (
            <Form
              formData={formData}
              setFormData={setFormData}
              setClick={setClick}
              click={click}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          )
        }
      </div >
    </div >
  )
}

export default App
