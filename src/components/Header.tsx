import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";

const Header = () => {
  const iconStyle =
    "text-xl md:text-2xl text-blue-950 transition-transform duration-300 hover:scale-110 hover:text-blue-700";
  const navLinkStyle =
    "text-base md:text-lg font-medium text-blue-950 hover:text-blue-700 transition-transform duration-200 hover:scale-105";

  return (
    <header className="w-full px-6 md:px-12 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-blue-950">
          <FaShopify className="text-4xl hover:text-black transition-colors" />
          <span className="text-3xl font-bold tracking-tight">Dukan</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-10">
          <Link to="/" className={navLinkStyle}>Home</Link>
          <Link to="/about" className={navLinkStyle}>About</Link>
          <Link to="/contact" className={navLinkStyle}>Contact</Link>
        </nav>

        {/* Icon Group */}
        <div className="flex items-center gap-6">
          <Link to="/cart" aria-label="Cart">
            <FaShoppingCart className={iconStyle} />
          </Link>
          <button aria-label="Favorites">
            <FaHeart className={iconStyle} />
          </button>
          <button aria-label="User Profile">
            <FaUser className={iconStyle} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
