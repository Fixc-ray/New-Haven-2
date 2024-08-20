import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-20"></div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 m-6">
        {/* Book A Table Div */}
        <div
          className="relative bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer w-full md:w-1/2"
          onClick={() => navigate("/reservation")} 
        >
          <img
            src="https://images.unsplash.com/photo-1645348210093-42dcad20c2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRhYmxlJTIwcmVzdGF1cmFudCUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Book a Table"
            className="rounded-lg w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white z-10">
            Book A Table
          </h2>
        </div>

        {/* Leave a Review Div */}
        <div
          className="relative bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1609405978461-63be963705b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJldmlldyUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
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
