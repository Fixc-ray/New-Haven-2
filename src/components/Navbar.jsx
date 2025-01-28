import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ isCartOpen, toggleCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#0b161a] backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-white hover:text-orange-400"
            >
              NEW HAVEN
            </Link>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-orange-400">
              HOME
            </Link>
            <Link to="/order" className="text-white hover:text-orange-400">
              ORDER
            </Link>
            <Link to="/book-us" className="text-white hover:text-orange-400">
              BOOK US
            </Link>
          </div>

          {/* Right: Cart */}
          <div className="hidden md:flex items-center">
            <Link
              to="/cart"
              className="text-orange-500 hover:text-orange-400 flex items-center"
            >
              <FaShoppingCart size={24} />
              <span className="ml-2">CART</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mb-4">
            <Link
              to="/"
              className="text-white hover:text-oranger-400"
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              to="/order"
              className="text-white hover:text-orange-400"
              onClick={toggleMenu}
            >
              ORDER
            </Link>
            <Link
              to="/book-us"
              className="text-white hover:text-orange-400"
              onClick={toggleMenu}
            >
              BOOK US
            </Link>
            <Link
              to="/cart"
              className="text-orange-500 hover:text-orange-400 flex items-center justify-center"
              onClick={toggleMenu}
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
