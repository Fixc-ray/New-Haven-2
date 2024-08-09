import React, { useEffect, useState } from "react";
import Item from "./Item";

function Menu() {
  const url = "http://localhost:3000/foodItems";
  const [foods, setFood] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((error) => console.log(error))
  },[]);
  const displayItem = foods.map((food)=> <Item key={food.id} food={food}/>)
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold">ENJOY OUR FINGER LICKING MEALS</h1>
      <div className="flex flex-wrap justify-end">{displayItem}</div>
    </div>
  );
}

export default Menu;
