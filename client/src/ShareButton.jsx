import { FaFacebookSquare } from "react-icons/fa";

function ShareButton({type}){
    console.log(type)
    return(
        <button className='text-black text-4xl me-2'>
            <FaFacebookSquare />
        </button>
    )
}

export default ShareButton