import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

function AddMenu() {
  const [items, setItems] = useState([]); // Corrected from 'item' to 'items'
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image_url, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      price,
      category,
      image_url,
    };

    fetch("https://oakberry-backend.vercel.app/foodItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((item) => {
        setItems([item, ...items]); // Corrected to 'items'
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });

    setName("");
    setPrice("");
    setCategory("");
    setImageUrl("");

    navigate("/admin/dashbord");
    window.alert("Item added successfully");
    window.location.reload();

  };

  return (
    <div className="p-6 w-80 mx-auto bg-white mt-20">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        ADD A NEW ITEM
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price:
        </label>
        <input
          type="number"
          value={price} // Corrected from 'health' to 'price'
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category:
        </label>
        <input
          type="text"
          value={category} // Corrected from 'bot_class' to 'category'
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Image URL:
        </label>
        <input
          type="text"
          value={image_url} // Corrected from 'avatar_url' to 'image_url'
          onChange={(e) => setImageUrl(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
        >
          Add new Item
        </button>
      </form>
    </div>
  );
}

export default AddMenu;
