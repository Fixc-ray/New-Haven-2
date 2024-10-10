import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";

function Menu({ foods, addToCart }) {  // Ensure addToCart is destructured from props
  return (
    <div className="mt-20 px-4">
      <Navbar />
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
        ENJOY OUR FINGER-LICKING MEALS
      </h1>

      <div className="flex flex-col-reverse md:flex-row mb-20">
        <div className="flex-1 mt-8 md:mt-0">
          <Search foods={foods} addToCart={addToCart} /> {/* Pass addToCart down */}
        </div>
      </div>
    </div>
  );
}

export default Menu;
