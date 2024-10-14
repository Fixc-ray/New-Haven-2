import React from "react";
import { useNavigate } from "react-router-dom";
import table from "../images/slide.jpg";
import review from "../images/slide2.jpg";
import Navbar from "./Navbar";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="mt-20"></div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 m-6">
        
        {/* Book A Table Section */}
        <div
          className="relative bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer w-full md:w-1/2"
          onClick={() => navigate("/reservation")}
        >
          <img
            src={table}
            alt="Book a Table"
            className="rounded-lg w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white z-10">
            Book A Table
          </h2>
        </div>

        {/* Leave a Review Section */}
        <a
          href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0rDTKSzEzMK4wYLRSMagwtDBKM04xTTVJNjQ0NDcytTKoMDayTE00NLUwSDK0NE4x8xLOT8xOSi0qqlQoSi0uSSwtSswrAQDp0RXQ&q=oakberry+restaurant&oq=oakberry&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYkgMYgAQyCQgAEEUYORiABDIQCAEQLhivARjHARiSAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDM5MzBqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x182f3d5e4c111725:0x329ea1580b193d6,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer w-full md:w-1/2"
        >
          <img
            src={review}
            alt="Leave a Review"
            className="rounded-lg w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white z-10">
            Leave a Review
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
