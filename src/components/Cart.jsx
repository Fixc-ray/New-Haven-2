import React from "react";
import Navbar from "./Navbar";

function Cart({ cartItems = [], removeFromCart, updateCartQuantity }) {
  const totalPrice = cartItems.reduce(
    (total, food) => total + food.price * food.quantity,
    0
  );

  const checkout = () => {
    window.alert(`CHECKING OUT...`);
  };

  return (
    <div className="flex mt-10 flex-col min-h-screen">
      <Navbar />
      {cartItems.length === 0 ? (
        <p className="text-center text-xl mt-10">Your cart is empty</p>
      ) : (
        <div className="flex-grow container mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((food) => (
              <div key={food.id} className="cart-food border p-4 rounded shadow-md">
                <img
                  src={food.imageUrl}
                  alt={food.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl mb-3 font-semibold">{food.name}</h3>
                <p>Price: KSH {food.price}</p>

                <div className="flex items-center ml-28 pl-8 space-x-4">
                  <button
                    onClick={() => updateCartQuantity(food.id, food.quantity - 1)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                    disabled={food.quantity <= 1} 
                  >
                    -
                  </button>
                  <p className="text-lg">{food.quantity}</p>
                  <button
                    onClick={() => updateCartQuantity(food.id, food.quantity + 1)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                <p>Total for this item: KSH {food.price * food.quantity}</p>

                <button
                  onClick={() => removeFromCart(food)}
                  className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-700 mt-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-md p-4 text-right mt-10">
            <h2 className="text-2xl font-semibold">Total: KSH {totalPrice}</h2>
            <button
              onClick={checkout}
              className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-700 mt-4"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
