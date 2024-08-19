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
    <div className="mt-20 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">ENJOY OUR FINGER-LICKING MEALS</h1>
      <div className="flex flex-col md:flex-row mt-8 gap-4">
        <div className="md:w-1/4">
          <Ultrafilter />
        </div>
        <div className="">
          <Search foods={foods} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
