import React from "react";
import { useNavigate } from "react-router-dom";
import Front from "../images/Front.jpg";
import Footer from "./Footer ";
import Navbar from "./Navbar";
import About from "./About";
import Menu2 from "./Menu2";

function Home({ addToCart }) {
  const navigate = useNavigate(); // Initialize navigate

  const redirectToDrinks = () => {
    navigate("/drinks"); // Use the appropriate route for the drinks section
  };

  return (
    <div className="home">
      <Navbar />
      <div className="relative w-full h-[80vh]">
        <img className="w-full h-full object-cover" src={Front} alt="Front" />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-bold mb-12 text-white">
          New Haven
        </h1>
        <h1 className="absolute top-[50%] left-1/2 transform -translate-x-1/2 text-2xl sm:text-4xl md:text-5xl mb-12 text-yellow-400 text-center">
          Dine With Friends And Family
        </h1>

        {/* New Button */}
        <button
          onClick={redirectToDrinks}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
        >
          Explore Drinks
        </button>
      </div>
      <About />
      <Menu2 addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default Home;
