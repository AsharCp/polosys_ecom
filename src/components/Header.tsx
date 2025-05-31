import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";

const Header = () => {
    const iconStyle = "size-6 text-blue-950 transition-transform duration-300 hover:scale-130";
    const navContent = "transition-transform hover:scale-120";
    
    
  return (
    <div className='flex flex-row justify-between items-center py-4 px-8 shadow-md'>
        <div className='flex flex-row gap-2 items-center text-blue-950'>
            <FaShopify className='size-16  hover:text-black' />
            <div className='font-bold text-4xl'>Dukan</div>
        </div>
        
        <div className='flex flex-row gap-12 text-xl text-blue-950'>
            <Link to='/' className={navContent}>Home</Link>
            <Link to='/about' className={navContent}>About</Link>
            <Link to='/contact' className={navContent}>Contact</Link>
        </div>
        <div className='flex flex-row gap-6'>
            <Link to='/cart'><FaShoppingCart className={iconStyle} /></Link>
            
            <FaHeart className={iconStyle} />
            <FaUser className={iconStyle} />
        </div>       
    </div>
    
  )

  
}

export default Header