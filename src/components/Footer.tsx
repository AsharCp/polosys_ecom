import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    const footerIcon = "size-8 border rounded-md hover:text-red-700 duration-200 hover:scale-120"
  return (
    <div className="w-full h-fit border-t flex flex-col items-center py-4">
        <div className="flex flex-row gap-8">
            <AiFillInstagram className={footerIcon} />
            <FaFacebook className={footerIcon}/>
            <IoLogoWhatsapp className={footerIcon}/>
        </div>
        <div className="pt-4 text-lg">&copy; 2025 Polosys</div>
        
    </div>
  )
}

export default Footer