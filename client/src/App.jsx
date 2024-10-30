import { useState } from 'react'
import ShareButton from './ShareButton'

import Form from './Form/Form'
import Confirmation from './Confirmation'

import dataKeys from './Form/dataKeys'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";


function App() {

  const [formData, setFormData] = useState(dataKeys)
  const [click, setClick] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className='flex flex-col md:flex-row justify-between min-h-screen shadow-xl'>
      <header className='relative md:w-1/3 m-5'>
        <div className='flex flex-col mx-auto md:sticky md:top-0'>
          <div className='m-10'>
            <h1 className='text-4xl md:text-6xl text-blue-900 mb-5 font-black'>Reg2VoteTx 🗳️</h1>
            <p className='text-blue-900 font-extrabold'>Texas Voter Registration: Form Completion Made Easy!</p>
            <hr className='mt-4' />
            <div className='mb-5 mt-5 flex flex-col'>
              <div className='my-5'>
                <p className='text-blue-700 font-bold hover:text-red-700'>Share with your network!</p>
                <ShareButton type={"facebook"} />
                <ShareButton type={"twitter"} />
                <ShareButton type={"linkedIn"} />
                <ShareButton type={"email"} />
              </div>
            </div>

            <div>
              <h2 className='text-gray-900 text-lg md:text-base sm:text-sm'>
                As of 2024,
                <a
                  href='https://www.sos.state.tx.us/elections/'
                  className='text-blue-600 font-bold hover:text-violet-600'
                  target='_blank'
                >
                  &nbsp;the State of Texas requires&nbsp;
                </a>
                a written and signed application for voter registration. This app makes it easier for you to get it done! Simply follow the steps below to download a completed TX voter registration form that you can mail to the county to register to vote.
              </h2>
            </div>

            <div className='text-blue-500 text-3xl mt-5'>
              <ul className='relative list-none pl-4 w-fit'>

                <li className='flex items-center mb-3'>
                  <TbCircleNumber1Filled className='absolute left-0 text-blue-500 ' />
                  <span className='ml-6 font-black text-blue-500 text-xl md:text-lg sm:text-base'>Complete the form to your right</span>
                </li>

                <li className='flex items-center mb-3'>
                  <TbCircleNumber2Filled className='absolute left-0 text-blue-500 ' />
                  <span className='ml-6 font-black text-blue-500 text-xl md:text-lg sm:text-base'>Review your details</span>
                </li>

                <li className='flex items-center mb-3'>
                  <TbCircleNumber3Filled className='absolute left-0 text-blue-500 ' />
                  <span className='ml-6 font-black text-blue-500 text-xl md:text-lg sm:text-base'>Download your ready-to-sign application!</span>
                </li>

                <li className='flex items-center mb-3'>
                  <TbCircleNumber4Filled className='absolute left-0 text-blue-500 ' />
                  <span className='ml-6 font-black text-blue-500 text-xl md:text-lg sm:text-base'>Mail or drop off at your county registrar's office</span>
                </li>
              



              </ul>
            </div>


            <div className=' border-4 border-yellow-100 rounded h-72 bg-yellow-100 p-6 mt-9 shadow-xl shadow-rose-100 box-border overflow-auto'>
              <h1 className='text-lg md:text-sm text-gray-900'> Important Considerations</h1>
              <hr />
              <ul className='mt-5 list-disc text-sm sm:text-sm max-w-full'>
                <li className='text-rose-900 font-bold'>You must be registered by October 7, 2024 to vote in the 2024 U.S. elections.</li>
                <li className='text-gray-900'>Some browsers may not display all completed fields correctly. For best results, review and update your PDF using a separate reader like Adobe before printing.</li>
                <li className='text-gray-900'>This app is only meant to assist in completing the form. I cannot offer advice on what should be included or how it should be completed —- please refer to the
                  <a
                    href='https://www.sos.state.tx.us/elections/forms/vr-with-receipt.pdf'
                    className='text-blue-600 font-bold hover:text-violet-600'
                    target='_blank'
                  >
                    &nbsp;form itself&nbsp;
                  </a>
                  for guidance.</li>
                <li className='text-gray-900'>The generated form remains editable, allowing you to make changes directly if needed.</li>
              </ul>
            </div>
          </div>
          <hr className='mt-4' />
          <div className=' flex gap-3 p-3 pt-4'>
            <button type='button' className='rounded-md bg-green-300 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-10 ms-8' onClick={() => window.location.href = 'mailto:racosta323@gmail.com'}>
              💌
            </button>
            <p className='text-gray-900'>
              Share your thoughts with the developer
            </p>
          </div>
        </div>
      </header>
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
