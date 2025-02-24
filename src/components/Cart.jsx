import React, { useState } from "react";
import Navbar from "./Navbar";

function Cart({ cartItems = [], removeFromCart, updateCartQuantity }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    email: "",
    phoneNumber: "",  
  });

  const totalPrice = cartItems.reduce(
    (total, food) => total + food.price * food.quantity,
    0
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const checkout = (e) => {
    e.preventDefault();

    const cartDetails = cartItems
      .map((item) => `${item.name} (x${item.quantity}): KSH ${item.price * item.quantity}`)
      .join("\n");

    const message = `New Order Details:
    
Name: ${userData.name}
Delivery Address: ${userData.address}
Email: ${userData.email}
Phone: ${userData.phoneNumber}

Hello I Would Like To Place An Order For The Following:
${cartDetails}

Total: KSH ${totalPrice}`;

    // Replace with your business WhatsApp number (in international format without the '+' sign)
    const businessWhatsAppNumber = "254722880230"; 

    const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
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
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-700 mt-4"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Modal for User and Payment Details */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Checkout Details</h2>
            <form onSubmit={checkout}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={userData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
