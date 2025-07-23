import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import logo from '@assets/images/logo.png';
import hotline from '@assets/images/hotline.png';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const NavLinks = () => (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-[18px]">
      {['Home', 'Menu', 'Cart' , 'Contact'].map((name) => (
        <li key={name}>
          <Link
            to={`/${name}`}
            className="text-black hover:text-white hover:bg-yellow-600 bg-yellow-300 px-4 py-1 rounded-2xl transition"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-black text-white px-6 py-4 lg:px-20 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/Home">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <NavLinks />
          {/* <div className="flex items-center gap-2">
            <img src={hotline} alt="Hotline" className="h-10 w-auto" />
            <span className="text-yellow-300 font-medium">Profile</span>
          </div> */}
        </div>

        {/* Mobile Menu Button */}
         <div className="flex items-center gap-2">
            <img src={hotline} alt="Hotline" className="h-10 w-auto" />
            <span className="text-yellow-300 font-medium">Profile</span>
          </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl text-yellow-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 lg:hidden flex flex-col gap-4">
          <NavLinks />
         
        </div>
      )}
    </nav>
  );
}
