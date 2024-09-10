import React, { useState } from "react";
import Item from "./Item";

function Search({ foods }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredFoods = foods.filter((food) => {
    const matchesCategory = category ? food.category === category : true;
    const matchesSearchTerm = food.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <div>
      <select
        className="w-full sm:w-1/3 p-2 border border-gray-400 rounded shadow-md mb-4"
        value={category}
        onChange={handleFilterChange}
      >
        <option value="">ALL CATEGORIES</option>
        <option value="Tea">TEA</option>
        <option value="Dessert">DESSERTS</option>
        <option value="Brunch">BRUNCH</option>
      </select>
      <div className="sm:flex-row items-center justify-between gap-4 mb-4">
        <input
          type="text"
          className="searchbox w-full sm:w-1/2 p-2 border border-gray-600 rounded shadow-md"
          placeholder="Search Meal..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredFoods.map((food) => (
          <Item key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default Search;
