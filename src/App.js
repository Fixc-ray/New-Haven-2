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
import Preloader from "./components/Preloader";

function App() {
  const url = "https://oakberry-backend.vercel.app/foodItems";
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true); // Manage loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the food items
        const res = await fetch(url);
        const data = await res.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchData();

    // Ensure the preloader is shown for at least 5 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Stop showing the preloader after 5 seconds
    }, 5000); // 5000ms = 5 seconds

    // Cleanup timer if component is unmounted before 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />

      {loading ? (
        <Preloader /> // Show Preloader for 5 seconds
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu foods={foods} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Liked" element={<LikedMeals />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
