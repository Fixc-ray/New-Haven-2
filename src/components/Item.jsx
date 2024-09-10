import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import { FaHeart } from "react-icons/fa";

function Item({ food }) {
  const [cartItems, setCartItems] = useState([]);
  const [liked, setLiked] = useState(false);

  const addToCart = (food) => {
    setCartItems([...cartItems, food]);
    window.alert(`${food.name} has been added to the cart!`);
  };
  const removeFromCart = (foods) => {
    setCartItems(cartItems.filter((food) => food.id !== foods.id));
  };
  const toggleLike = () => {
    setLiked(!liked);
    window.alert(`${food.name} Has Been Added To Favourite Meals  `);
  };
  return (
    <div>
      <Routes>
        <Route
          path="/Cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Routes>

      <div key={food.id} className="border p-4 m-4 w-80 rounded shadow-md">
        <img
          src={food.imageUrl}
          alt={food.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h4 className="text-xl font-semibold mb-2">
          {food.name.toUpperCase()}
        </h4>
        <h4 className="text-lg">Price: KSH {food.price}</h4>
        <button
          onClick={() => {
            addToCart(food);
          }}
          className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
        >
          Add to Cart
        </button>
        <div className="flex">
          <FaHeart
            size={24}
            onClick={toggleLike}
            style={{ color: liked ? "red" : "gray", cursor: "pointer" }} 
            className="ml-10 mt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Item;
