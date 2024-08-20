import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu"
import Home from "./components/Home";
import Contact from "./components/Contact"
import { useState } from "react";
import Reservation from "./components/Resavation";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu isCartOpen={isCartOpen} toggleCart={toggleCart} />}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Reservation" element={<Reservation/>}/>
      </Routes>
      <div>
      <Navbar isCartOpen={isCartOpen} toggleCart={toggleCart} />
      
    </div>
    </div>
  );
}

export default App;
