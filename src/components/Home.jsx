import React from "react";
import { useNavigate } from "react-router-dom";
import first from "../Videos/first.mp4";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer ";

function Home({ addToCart }) {
  const navigate = useNavigate();

  const Order = () => {
    navigate("/Order");
  };
  const Drink = () => {
    navigate("/Drinks");
  };

  return (
    <div className="home">
      <Navbar />
      <div className=" mt-16 relative w-full h-[80vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={first}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            TASTE OF MOTHERLAND
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-8">
            Dine With Friends And Family
          </h2>

          {/* Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={Order}
              className="bg-orange-500 text-black font-bold py-2 px-6 sm:px-8 rounded hover:bg-yellow-500 transition text-sm sm:text-base"
            >
              Order Your Meal
            </button>
            <button
              onClick={Drink}
              className="bg-orange-500 text-black font-bold py-2 px-6 sm:px-8 rounded hover:bg-yellow-500 transition text-sm sm:text-base"
            >
              Order Your Drink
            </button>
          </div>
        </div>
      </div>

      {/* About and Menu Section */}
      <div className="">
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
