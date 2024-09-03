import React from "react";
import about from "../images/about.jpg";

function Footer() {
  return (
    <div className="relative w-full h-[60vh]">
      <img className="w-full h-full object-cover" src={about} alt="Front" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h4 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 sm:mt-18">
          THE OAkBErry
        </h4>
        <p className="text-white text-base md:text-xl font-bold mb-6">
          WELCOME TO THE OAkBErry, WHERE FRESH INGREDIENTS, INSPIRED DISHES, AND WARM HOSPITALITY COME TOGETHER. ENJOY A MEMORABLE DINING EXPERIENCE IN OUR INVITING ATMOSPHERE. EVERY MEAL IS A STORY, AND EVERY GUEST IS FAMILY.
        </p>
        <div className="text-white text-base md:text-lg">
          <h5 className="text-xl font-bold text-orange-500 mb-2">CONTACTS</h5>
          <ul className="list-none p-0">
            <li className="mb-2">
              <i className="fas fa-map-marker-alt mr-2" /> Nairobi, Kenya
            </li>
            <li className="mb-2">
              <i className="fas fa-phone mr-2" /> 0112673864876
            </li>
            <li>
              <i className="fas fa-envelope" /> <a href="" className="underline">theoakberry@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="">
        &copy; 2024 OAKBERRY. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}

export default Footer;
