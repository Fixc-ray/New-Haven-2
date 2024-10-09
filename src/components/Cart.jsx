import React from "react";
import Navbar from "./Navbar";

function Cart({ cartItems = [], removeFromCart }) {
  return (
    <div className="mt-20">
      <Navbar />
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((food) => (
          <div key={food.id} className="cart-food">
            <h3>{food.name}</h3>
            <img src={food.imageUrl} alt={food.name} />
            <p>Price: KSH {food.price}</p> 
            <button onClick={() => removeFromCart(food)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
