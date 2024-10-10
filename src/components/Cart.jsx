import React from "react";
import Navbar from "./Navbar";

function Cart({ cartItems = [], removeFromCart }) {
  const totalPrice = cartItems.reduce((total, food) => total + food.price * food.quantity, 0);
  const checkout = () => {
    window.alert(`CHECKING OUT....`)
  }

  return (
    <div className="flex mt-10 flex-col min-h-screen">
      <Navbar />
      {cartItems.length === 0 ? (
        <p className="text-center text-xl mt-20">Your cart is empty</p>
      ) : (
        <div className="flex-grow container mx-auto mt-10">
          {/* Use grid layout to control how many items are shown per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((food) => (
              <div key={food.id} className="cart-food border p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold">{food.name}</h3>
                <img
                  src={food.imageUrl}
                  alt={food.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <p>Price: KSH {food.price}</p>
                <p>Quantity: {food.quantity}</p> {/* Display quantity */}
                <p>Total for this item: KSH {food.price * food.quantity}</p> {/* Total per item */}
                <button
                  onClick={() => removeFromCart(food)}
                  className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Display Total Price */}
          <div className="bg-white shadow-md p-4 text-right mt-10">
            <h2 className="text-2xl font-semibold">Total: KSH {totalPrice}</h2>
            <button onClick={checkout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
