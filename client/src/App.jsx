import { useState } from 'react'
import ShareButton from './ShareButton'

import Form from './Form/Form'
import Confirmation from './Confirmation'
import Modal from './Modal'

import dataKeys from './Form/dataKeys'
import { FaFacebookSquare } from "react-icons/fa"

function App() {

  const [formData, setFormData] = useState(dataKeys)
  const [click, setClick] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className='flex flex-col md:flex-row justify-between min-h-screen shadow-xl'>
      <header className='relative md:w-1/4 m-5'>
        <div className='flex flex-col mx-auto md:sticky md:top-0'>
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
              As of 2024,
              <a
                href='https://www.sos.state.tx.us/elections/'
                className='text-blue-600 font-bold hover:text-violet-600'
                target='_blank'
              >
                &nbsp;the State of Texas requires&nbsp;
              </a>
              that eligible voters first register to vote in the county in which they reside. Eligible voters must submit a written and signed application "either in person or by mail to the county voter registrar in the county in which the voter resides."
              <br /><br />
              The State of Texas currently does not have an option to digitally register to vote and eligible voters must complete a
              <a 
                href='https://www.sos.state.tx.us/elections/vr/index.shtml'
                className='text-blue-600 font-bold hover:text-violet-600'
                target='_blank'
              >
                  &nbsp;PDF form
              </a>.
              <span className='font-bold'>
              &nbsp;To participate in any upcoming elections, eligible voters MUST have successfully registered to vote (as outlined above) 30 days PRIOR to the date of the election.
                <br/><br/>
                <span className='text-red-500'>
                Important: To be eligible to vote in the 2024 U.S. elections, voters must have registered by October 7, 2024.  
                </span>
              </span>
              <br /><br />
              The following form was created to make it easier for eligible voters in Texas to register to vote. Eligible voters can complete the following form, review and submit their entries, then can download and sign the completed form to either mail to or drop off to their 
              <a 
                href='https://www.sos.state.tx.us/elections/voter/votregduties.shtml'
                className='text-blue-600 font-bold hover:text-violet-600'
                target='_blank'
                >
                  &nbsp;county's Voter Registrar
              </a>.
              <br /><br />
              Please be aware that browser PDF readers may not display certain completed areas, such as checkboxes. To ensure accuracy, please review your PDF using a separate reader like Adobe. This will also allow you to make any necessary updates directly to the document before printing it.
            </p>
            <p className='text-gray-900'>I CANNOT HELP YOU WITH THE FORM.</p>
          </div>

          <div className=' flex gap-3 p-3 pt-52'>
            <button type='button' className='rounded-md bg-green-300 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-10 ms-8' onClick={() => window.location.href = 'mailto:racosta323@gmail.com'}>
            💌 
            </button>
            <p className='text-gray-900'>
              Share your thoughts with the developer
            </p>
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
              setIsChecked={setIsChecked}
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
