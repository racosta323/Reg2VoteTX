import Form from './Form/Form'


function App() {

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
      <header className='w-full max-w-4xl md:max-w-7xl border-b w-5/6 flex flex-col space-x-20'>
        <div className='border-gray-900/10 pb-12 w-5/6 flex space-x-20'>
          <div className='flex-initial w-1/3'></div>
          <div className='w-full mt-10'>
            <h1 className='text-6xl text-gray-900 mb-5'>Reg2VoteTx</h1>
            <p className='text-gray-500 font-bold mb-10'>Offering a simple way to register to vote in Texas</p>
            <p className='text-gray-900'>
              In the year 2024, the State of Texas requires "that a person submit an application either in person or by mail to the county voter registrar in the county in which the voter resides. The application must be in writing and signed by the applicant." (https://www.sos.state.tx.us/elections/vr/index.shtml).


            </p>
          </div>
        </div>
      </header>
      <Form />
    </div>
  )
}

export default App
