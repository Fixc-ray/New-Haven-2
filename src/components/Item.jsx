import React, { useState, useEffect } from "react";

function Item({ food }) {
  return (
    <div
      key={food.id}
      className="border p-4 m-4 w-80 rounded shadow-md hover:bg-orange-500"
    >
      <img
        src={food.imageUrl}
        alt=""
        className="w-full h-48 object-cover mb-4 rounded "
      />
      <h4 className="text-xl font-semibold mb-2">{food.name}</h4>
      <h4 className="text-lg">Price: KSH {food.price}</h4>
    </div>
  );
}

export default Item;
