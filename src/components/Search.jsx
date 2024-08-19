import React, { useState } from "react";
import Item from "./Item";

function Search({ foods, addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="searchbox p-1 border border-gray-600 mt-4 mb-4 rounded shadow-md"
        placeholder="Search Meal..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="flex flex-wrap justify-end">
        {filteredFoods.map((food) => (
          <Item key={food.id} food={food} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Search;
