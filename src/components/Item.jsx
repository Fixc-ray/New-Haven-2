// Item.js
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

function Item({ food, addToCart }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLikedMeals = JSON.parse(localStorage.getItem("likedMeals")) || [];
    const isLiked = storedLikedMeals.some((item) => item.id === food.id);
    setLiked(isLiked);
  }, [food.id]);


  return (
    <div key={food.id} className="border p-4 m-4 w-80 rounded shadow-md">
      <img
        src={food.imageUrl}
        alt={"Img To Be Added Soon"}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h4 className="text-xl font-semibold mb-2">{food.name.toUpperCase()}</h4>
      <h4 className="text-lg">Price: KSH {food.price}</h4>
      <button
        onClick={() => addToCart(food)}
        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
      >
        Add to Cart
      </button>
      <div className="flex">
        <FaHeart
          size={24}
          style={{ color: liked ? "gray" : "red", cursor: "pointer" }}
          className="ml-10 mt-5"
        />
      </div>
    </div>
  );
}

export default Item;