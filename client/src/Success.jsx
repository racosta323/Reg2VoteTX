import { useLocation, useNavigate } from 'react-router-dom'

function Success() {
    const location = useLocation()
    const { downloadUrl } = location.state || {}

    const navigate = useNavigate()

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='bg-white shadow p-5 rounded'>
                <h1 className="text-gray-900">Success!</h1>
                {downloadUrl && (
                    <>
                        <p className='text-gray-900'>Download your form here!</p>
                        <a
                            href={downloadUrl}
                            download
                            className='font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline visited:text-purple-600'
                        >
                            Download PDF
                        </a>
                    </>
                )}
            </div>
            <button
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
                type="button"
                onClick={() => navigate('/')}
            >
                Back to Homepage
            </button>
        </div>
    )
}

export default Success