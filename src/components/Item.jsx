import React from "react";

function Item({ food, addToCart }) {
  return (
    <div
      key={food.id}
      className="border p-4 m-4 w-80 rounded shadow-md"
    >
      <img
        src={food.imageUrl}
        alt={food.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h4 className="text-xl font-semibold mb-2">{food.name}</h4>
      <h4 className="text-lg">Price: KSH {food.price}</h4>
      <button
        onClick={() => addToCart(food)}
        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
