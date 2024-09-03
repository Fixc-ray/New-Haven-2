import React from "react";
import { useNavigate } from "react-router-dom";
import table from "../images/slide.jpg"
import review from "../images/slide2.jpg"

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-20"></div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 m-6">
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

        <div
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
