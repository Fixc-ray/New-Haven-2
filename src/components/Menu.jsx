import React, { useEffect, useState } from "react";
import Search from "./Search";
import Ultrafilter from "./Ultrafilter";

function Menu() {
  const url = "https://oakberry-backend.vercel.app/foodItems";
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching food items:", error));
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold">ENJOY OUR FINGER-LICKING MEALS</h1>
      <div  className="flex">
      <Ultrafilter/>
      <Search foods={foods} />
      </div>
      
    </div>
  );
}

export default Menu;
