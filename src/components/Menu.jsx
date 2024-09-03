import React, { useState, useEffect } from "react";
import Search from "./Search";
import Footer from "./Footer "

function Menu({ isCartOpen }) {
  const url = "https://oakberry-backend.vercel.app/foodItems";
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching food items:", error));
  }, []);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <div className="mt-20 px-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center ">
        ENJOY OUR FINGER-LICKING MEALS
      </h1>
      
      <div className="flex flex-col-reverse md:flex-row mb-20">
        <div className="flex-1 mt-8 md:mt-0">
          <Search foods={foods} addToCart={addToCart} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Menu;
