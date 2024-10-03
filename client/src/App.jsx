import Form from "./Form"

function App() {

  return (
    <div class='flex justify-center items-center min-h-screen bg-gray-100'>
      <div class="w-full max-w-4xl h-96 bg-white shadow-md overflow-hidden md:max-w-7xl md:flex rounded "> 
        <Form />       
        {/* <div class='bg-black text-white p-4 '>
          hello
        </div> */}
        <div class='bg-white p-4'>
          other
        </div>
      </div>
    </div>
  )
}

export default App
