import React from "react";

function Cart({ cartItems = [] }) {
  
  return (
    <div className="mt-10 mr-8 p-4 border rounded shadow-md w-[20rem]">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="mt-5 mb-5">
          {cartItems.map((item, index) => (
            <div key={index} className="mb-2">
            {item.name} - KSH {item.price}
            </div>
          ))}
        </div>
      )}
      <button>checkout</button>
    </div>
  );
}

export default Cart;
