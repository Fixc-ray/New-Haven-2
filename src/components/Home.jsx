import React from "react";
import Front from "../images/Front.jpg";
import TopMenus from "./TopMenus";
import Footer from "./Footer ";

function Home() {
  return (
    <div>
      <div className="relative w-full h-[80vh]">
        <img className="w-full h-full object-cover" src={Front} alt="Front" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold mb-8 text-orange-500">
          THE OAkBErry
        </h1>
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-4xl font-bold mt-20 md:mt-28 text-center">
          COME DINE WITH <br /> FRIENDS & FAMILY
        </h2>
      </div>
      <TopMenus/>
      <Footer/>
    </div>
  );
}

export default Home;
