import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom"; // Add Navigate import
import Menu from "./components/Menu";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Reservation from "./components/Resavation";
import Cart from "./components/Cart";
import LikedMeals from "./components/LikedMeals";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import AdminDashboard from "./components/Admins/AdminsDashboard";
import Login from "./components/Admins/Login";
import AddMenu from "./components/Admins/AddMenu";
import ProtectedRoute from "./components/Admins/ProtectedRoute";
import DeleteMenu from "./components/Admins/DeleteMenu";
import EditMenu from "./components/Admins/EditMenu";
import Featured from "./components/Featured";

function App() {
  const url = "https://oakberry-backend.vercel.app/foodItems";
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
      try {
        const res = await fetch(url);
        const data = await res.json();
        setFoods(data);
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

  const isAuthenticated = () => !!localStorage.getItem('adminToken');

  if (loading) return <Preloader />;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Menu"
          element={<Menu foods={foods} addToCart={addToCart} addToLikedMeals={addToLikedMeals} />}
        />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route
          path="/Cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} />}
        />
        <Route
          path="/Liked"
          element={<LikedMeals likedMeals={likedMeals} removeFromLikedMeals={removeFromLikedMeals} />}
        />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>}
        />
        <Route
          path="/admin/add-menu"
          element={<ProtectedRoute>
            <AddMenu />
          </ProtectedRoute>}
        />
         <Route
          path="/admin/delete"
          element={<ProtectedRoute>
            <DeleteMenu />
          </ProtectedRoute>}
        />
        <Route
          path="/admin/edit"
          element={<ProtectedRoute>
            <EditMenu />
          </ProtectedRoute>}
        />
        <Route path="/feature" element={<Featured food={foods}/>} />
      </Routes>
    </div>
  );
}

export default App;
