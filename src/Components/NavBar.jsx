<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // assuming you saved { username: "Mary" }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login"); // go to login page
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      {user ? (
        <button
          onClick={() => navigate("/shop")}
          className="font-bold hover:underline"
        >
          Welcome {user.username}
        </button>
      ) : (
        <Link to="/shop" className="font-bold">My Shop</Link>
      )}

      <ul className="flex gap-4 items-center">
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>

        {user ? (
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
=======
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
      {['Home', 'Menu', 'Cart' , 'Contact' , 'About'].map((name) => (
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
>>>>>>> fb06b8fcbea303306f935ed731d9d08bfc0fb9af
