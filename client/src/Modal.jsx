import { useNavigate } from "react-router-dom"

function Modal({ setShowModal, formData, setFormData }) {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://127.0.0.1:8000/generate_pdf', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(formData, null, 2)

            })

            if (response.ok) {

                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)

                navigate('/success', { state: { downloadUrl: url } })

                setFormData(dataKeys)


            } else {
                console.log("Failed to download file.", response.statusText)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div class="relative z-10" aria-labelledby="not-registered" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                    </svg>
                                </div>
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="not-registered">You have not officially registered to vote</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            Continuing will allow you to
                                            <span className="font-extrabold text-black-900">
                                                &nbsp;download a copy&nbsp;
                                            </span>
                                            of your completed voter registration form. You must still deliver to your county's Voting Registrar's office. <br /><br /> Learn more here:
                                            <br />
                                            <a
                                                href="https://www.votetexas.gov/register-to-vote/update-voter-registration.html"
                                                className='text-blue-600 font-bold hover:text-violet-600'
                                                target='_blank'
                                            >
                                                https://www.votetexas.gov/register-to-vote/update-voter-registration.html
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                onClick={handleSubmit}
                            >
                                Agree and Download Form
                            </button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => { setShowModal(false) }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal