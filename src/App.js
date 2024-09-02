import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu"
import Home from "./components/Home";
import Contact from "./components/Contact"
import Reservation from "./components/Resavation";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Reservation" element={<Reservation/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      <div>
      <Navbar/>
      
    </div>
    </div>
  );
}

export default App;
