import React from "react";
import Front from "../images/Front.jpg";

function Home() {
  return (
    <div>
    <div className="relative w-full h-full">
      <img className="w-full h-full object-cover" src={Front} alt="Front" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold mb-8 text-orange-500">
        THE OAKBERRY
      </h1>
      <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold mt-28">
        COME DINE WITH <br /> FRIENDS & FAMILY
      </h2>
    </div>
    </div>
  );
}

export default Home;
