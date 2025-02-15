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
import AdminDashboard from "./components/Admins/AdminsDashboard";
import Login from "./components/Admins/Login";
import AddMenu from "./components/Admins/AddMenu";
import ProtectedRoute from "./components/Admins/ProtectedRoute";
import DeleteMenu from "./components/Admins/DeleteMenu";
import EditMenu from "./components/Admins/EditMenu";
import Featured from "./components/Featured";
import Drinks from "./components/Drinks";
import BookingForm from "./components/Bookus";

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [likedMeals, setLikedMeals] = useState(() => {
    const storedLikedMeals = localStorage.getItem("likedMeals");
    return storedLikedMeals ? JSON.parse(storedLikedMeals) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      const endpoints = [
        "https://new-haven-backend.vercel.app/breakfast",
        "https://new-haven-backend.vercel.app/MainDishes",
        "https://new-haven-backend.vercel.app/sides",
      ];
  
      try {
        const responses = await Promise.all(endpoints.map((endpoint) => fetch(endpoint)));
        const data = await Promise.all(responses.map((res) => res.json()));
  
        // Combine all fetched data into one array
        const combinedFoods = [...data[0], ...data[1], ...data[2]];
        setFoods(combinedFoods);
      } catch (error) {
        console.error("Error fetching food items:", error);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (food) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.id === food.id && item.name === food.name
      );
  
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === food.id && item.name === food.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...food, quantity: 1 }];
      }
    });
    alert("Added to cart");
  };
  

  const removeFromCart = (food) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== food.id)
    );
  };

  const updateCartQuantity = (id, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const addToLikedMeals = (food) => {
    setLikedMeals((prevLikedMeals) => {
      const isAlreadyLiked = prevLikedMeals.some((item) => item.id === food.id);
      if (isAlreadyLiked) return prevLikedMeals;
      const updatedLikedMeals = [...prevLikedMeals, food];
      localStorage.setItem("likedMeals", JSON.stringify(updatedLikedMeals));
      return updatedLikedMeals;
    });
  };

  const removeFromLikedMeals = (id) => {
    setLikedMeals((prevLikedMeals) => {
      const updatedLikedMeals = prevLikedMeals.filter((meal) => meal.id !== id);
      localStorage.setItem("likedMeals", JSON.stringify(updatedLikedMeals));
      return updatedLikedMeals;
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/order"
          element={
            <Menu
              foods={foods}
              addToCart={addToCart}
              addToLikedMeals={addToLikedMeals}
            />
          }
        />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Drinks" element={<Drinks addToCart={addToCart} />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route
          path="/Cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateCartQuantity={updateCartQuantity}
            />
          }
        />
        <Route
          path="/Liked"
          element={
            <LikedMeals
              likedMeals={likedMeals}
              removeFromLikedMeals={removeFromLikedMeals}
            />
          }
        />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-menu"
          element={
            <ProtectedRoute>
              <AddMenu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/delete"
          element={
            <ProtectedRoute>
              <DeleteMenu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit"
          element={
            <ProtectedRoute>
              <EditMenu />
            </ProtectedRoute>
          }
        />
        <Route path="/feature" element={<Featured food={foods} />} />
        <Route path="/book-us" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
