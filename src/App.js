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
  const [cartItems, setCartItems] = useState([]);

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
  

  const addToCart = (food) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === food.id);

      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...food, quantity: 1 }];
      }
    });

window.alert(`${food.name} has been added to the cart!`);
  };

  
  const removeFromCart = (food) => {
    setCartItems((prevCartItems) =>
      prevCartItems.reduce((acc, item) => {
        if (item.id === food.id) {
          // Decrease the quantity if it's greater than 1, otherwise remove the item
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu foods={foods} addToCart={addToCart}/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/Liked" element={<LikedMeals />} />
          <Route path="Add" element={<AddMenu />} />/
        </Routes>
    </div>
  );
}

export default App;