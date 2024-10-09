import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Reservation from "./components/Resavation";
import Cart from "./components/Cart";
import LikedMeals from "./components/LikedMeals";
import { useEffect, useState } from "react";
import AddMenu from "./components/AddMenu";

function App() {
  const url = "https://oakberry-backend.vercel.app/foodItems";
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu foods={foods} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Liked" element={<LikedMeals />} />
          <Route path="Add" element={<AddMenu />} />/
        </Routes>
    </div>
  );
}

export default App;
