import React from "react";

function Cart({ cartItems = [] }) {
  return (
    <div className="ml-8 mt-20 p-4 border rounded shadow-md w-[20rem]">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-2">
              {item.name} - KSH {item.price}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
