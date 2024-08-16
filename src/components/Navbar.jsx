import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-md fixed">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-black hover:text-orange-500"
            >
              THE OAKBERRY
            </Link>
          </div>
          <div className="flex">
            <div className="hidden md:flex space-x-8 mt-5 mr-40">
              <Link to="/" className="text-orange-500 hover:text-yellow-500">
                Home
              </Link>
              <Link
                to="/Menu"
                className="text-orange-500 hover:text-yellow-500"
              >
                Menu
              </Link>
              <Link
                to="/Contact"
                className="text-orange-500 hover:text-yellow-500"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
