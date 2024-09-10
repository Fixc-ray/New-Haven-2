import React from "react";
import about from "../images/about.jpg";

function Footer() {
  return (
    <div className="relative w-full h-[60vh] md:h-[50vh] font-poppins">
      <img
        className="w-full h-full object-cover"
        src={about}
        alt="Front"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h4 className="text-3xl mt-14 sm:text-4xl font-bold text-orange-500 mb-4">
          THE OAkBErry
        </h4>
        <p className="text-white text-sm sm:text-lg md:text-xl font-medium mb-6">
          WELCOME TO THE OAkBErry, WHERE FRESH INGREDIENTS, INSPIRED DISHES, AND
          WARM HOSPITALITY COME TOGETHER. ENJOY A MEMORABLE DINING EXPERIENCE IN
          OUR INVITING ATMOSPHERE. EVERY MEAL IS A STORY, AND EVERY GUEST IS
          FAMILY.WE ARE LOCATED ALONG  <span className="text-orange-500">KIAMBU ROAD, THINDIGUA</span>. FEEL FREE TO COME DINE WITH US.
        </p>
      </div>
      <p className="w-full mt-2 text-center text-xs sm:text-sm text-black">
        &copy; 2024 OAKBERRY. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}

export default Footer;
