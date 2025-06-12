import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import type { RootState } from '../Redux/Store/Store';
import { MdOutlineMenu } from "react-icons/md";
import { useState } from 'react';
import { FaRegWindowClose } from "react-icons/fa";

const Header = () => {
  const iconStyle =
    "text-xl md:text-2xl text-blue-950 transition-transform duration-300  hover:text-blue-700";
  const navLinkStyle =
    "text-base md:text-lg font-medium text-blue-950 hover:text-blue-700 transition-transform duration-200 hover:scale-105";

    const [showNav,setShowNav] = useState(true)

    const count = useSelector((state: RootState)=>state.cart.cartCount)

    const handleDropNav=()=>{
      setShowNav(false)
    }
   const handlecloaseNav=()=>{
      setShowNav(true)
   }

  return (
    <div>
    <header className="w-full px-6 md:px-12 py-4 bg-white shadow-md sticky top-0 z-50">
      
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-blue-950">
          <FaShopify className="text-4xl hover:text-black transition-colors" />
          <span className="text-3xl font-bold tracking-tight">Dukan</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-10">
          <Link to="/" className={navLinkStyle}>Home</Link>
          <Link to="/about" className={navLinkStyle}>About</Link>
          <Link to="/contact" className={navLinkStyle}>Contact</Link>
        </nav>

        {/* Icon Group */}
        <div className="flex items-center gap-6">
          <Link to="/cart" aria-label="Cart" className='relative'>
            <span className='absolute -top-1 -right-1 text-xs text-white bg-red-800 rounded-full px-1 py-0'>{count}</span>
            <FaShoppingCart className={iconStyle}  />
          </Link>
          <Link to='/fav' aria-label="Favorites " className='hidden sm:flex'>
            <FaHeart className={iconStyle} />
          </Link>
          <Link to='help' aria-label="User Profile" className='hidden sm:flex'>
            <FaUser className={iconStyle} />
          </Link>
          {showNav?
          <button onClick={handleDropNav} aria-label="User Profile" className='flex sm:hidden'>
            <MdOutlineMenu className={iconStyle} />
          </button>:
          <button onClick={handlecloaseNav} aria-label="User Profile" className='flex sm:hidden'>
            <FaRegWindowClose className={iconStyle} />
          </button>
          }

          
        </div>
        
      </div>
    </header>
    {showNav? <div></div>:
    <div className='flex sm:hidden b-0 right-0 h-fit w-full bg-green-100 flex-col gap-2 px-4 py-4 z-50 items-center'>
          <Link to="/" className={navLinkStyle} onClick={()=>setShowNav(true)}>Home</Link>
          <Link to="/about" className={navLinkStyle} onClick={()=>setShowNav(true)}>About</Link>
          <Link to="/contact" className={navLinkStyle} onClick={()=>setShowNav(true)}>Contact</Link>
          <Link to="/fav" className={navLinkStyle} onClick={()=>setShowNav(true)}>Favorites</Link>
          <Link to="/cart" className={navLinkStyle} onClick={()=>setShowNav(true)}>Cart</Link>
          <Link to="/help" className={navLinkStyle} onClick={()=>setShowNav(true)}>Help</Link>
    </div>
    }
    </div>
  );
};

export default Header;
