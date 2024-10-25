import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";


function ShareButton({ type }){

    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent("Texas Voter Registration: Form Completion Made Easy!")

    const shareLinks = {
        "facebook": `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "twitter": `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
        "linkedIn": `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "email": `mailto:?subject=Check%20out%20this%20awesome%20web%20app!&body=${text}%0A%0A${url}`, 
    }

    const socials = {
        "facebook": <FaFacebookSquare/>,
        "twitter": <FaXTwitter/>,
        "linkedIn": <FaLinkedin />,
        "email": <MdOutlineMailOutline/>
    }

    const openShareWindow = (url) => {
        window.open(url, '_blank', 'width=600, height=400')
    }


    return(
        <button className='text-blue-700 text-4xl me-2 hover:text-red-700' onClick={()=> openShareWindow(shareLinks[type])}>
            {socials[type]}
        </button> 
    )
}

export default ShareButton