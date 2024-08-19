import React, { useState, useEffect } from "react";
import Search from "./Search";
import Cart from "./Cart";

function Menu() {
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
    <div className="mt-20">
      <h1 className="text-4xl font-bold">ENJOY OUR FINGER-LICKING MEALS</h1>
      <div className="flex">
        <Search foods={foods} addToCart={addToCart} />
        <Cart cartItems={cart} />
      </div>
    </div>
  );
}

export default Menu;
