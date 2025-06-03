import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const iconClass =
    "text-2xl md:text-3xl text-gray-600 border border-gray-300 p-2 rounded-full hover:text-red-600 hover:border-red-600 transition-transform duration-300 hover:scale-110";

  return (
    <footer className="w-full bg-gray-100 py-6 border-t border-gray-300 mt-10">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Social Icons */}
        <div className="flex gap-6">
          <AiFillInstagram className={iconClass} />
          <FaFacebook className={iconClass} />
          <IoLogoWhatsapp className={iconClass} />
        </div>

        {/* Footer Text */}
        <div className="text-gray-700 text-sm md:text-base font-medium">
          &copy; {new Date().getFullYear()} Polosys. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
