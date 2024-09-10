import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu"
import Home from "./components/Home";
import Contact from "./components/Contact"
import Reservation from "./components/Resavation";
import Cart from "./components/Cart";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import LikedMeals from "./components/LikedMeals";

function App() {
  const url = "https://oakberry-backend.vercel.app/foodItems";
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching food items:", error));
  }, []);
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu foods={foods}/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Reservation" element={<Reservation/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/liked" element={<LikedMeals/>}/>
      </Routes>
      <div>
      <Navbar/>
      
    </div>
    </div>
  );
}

export default App;
