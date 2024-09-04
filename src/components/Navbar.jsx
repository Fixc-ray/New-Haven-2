import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ isCartOpen, toggleCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-black hover:text-orange-500"
            >
              THE OAkBErry
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-orange-500 hover:text-yellow-500">
              HOME
            </Link>
            <Link to="/Menu" className="text-orange-500 hover:text-yellow-500">
              MENU
            </Link>
            <Link
              to="/Contact"
              className="text-orange-500 hover:text-yellow-500"
            >
              CONTACT
            </Link>
            <Link
              to="/Cart"
              className="text-orange-500 hover:text-yellow-500 flex items-center"
            >
              <FaShoppingCart size={24} />
              <span className="ml-2">CART</span>
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link
              to="/"
              className="text-orange-500 hover:text-yellow-500"
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              to="/Menu"
              className="text-orange-500 hover:text-yellow-500"
              onClick={toggleMenu}
            >
              MENU
            </Link>
            <Link
              to="/Contact"
              className="text-orange-500 hover:text-yellow-500"
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
            <Link
  to="/Cart"
  className="text-orange-500 hover:text-yellow-500 flex items-center justify-center"
>
  <FaShoppingCart size={24} />
  <span className="ml-2">CART</span>
</Link>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
