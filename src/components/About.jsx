import React from "react";
import About1 from "../images/About1.jpg";
import About2 from "../images/About2.jpg";
import Center from "../images/Center.png"

function About() {
  const redirectToMenu = () => {
    alert("Feature to be implemented soon");
  };
  const redirectToDrinks = () => {
    window.open("https://drive.google.com/file/d/1hEbLA92ipezODactvYDAv6nSfaahKhzK/view?usp=sharing", "_blank");
  };
  
  return (
    <div className="bg-[#0b161a] p-4 md:p-8">
      <p className="text-white">New Haven</p>
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-4 text-orange-500">
        ABOUT US
      </h1>
      {/* Container for flex layout on larger screens */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Image */}
        <div className="w-full md:w-1/3">
          <img
            src={About1}
            alt="About New Haven"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Center Text */}
        <div className="w-full md:w-1/3 text-center border rounded-30px border-black pl-16 pr-16 pt-16 pb-10">
          <h2 className="text-2xl md:text-3xl mb-4 text-white font-bold">
            TASTE OF MOTHERLAND
          </h2>
          <img
            src={Center}
            alt="Small Cultural Icon"
            className="w-14 h-14 mx-auto rounded-full shadow-md mb-4"
          />
          <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
            onClick={redirectToMenu}
              className="bg-orange-500 text-black font-bold px-6 sm:px-8 py-2 rounded hover:bg-yellow-500 transition text-sm sm:text-base"
            >
              Download Food Menu
            </button>
            <button
            onClick={redirectToDrinks}
              className="bg-orange-500 text-black font-bold px-6 sm:px-8 py-2 rounded hover:bg-yellow-500 transition text-sm sm:text-base"
            >
              Download Drinks Menu
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3">
          <img
            src={About2}
            alt="Cultural Food"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Map Section: Positioned below content */}
      <div className="mt-8">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.938592420507!2d36.7880268!3d-1.2839481!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b6b4384267%3A0x1f4b32ff6e0944db!2sNew%20haven%20restaurant%20kilimani!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
          title="Google Map"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
