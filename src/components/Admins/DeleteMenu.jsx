import React, { useState, useEffect } from "react";

function DeleteMenu() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch the items from the backend when the component loads
  useEffect(() => {
    fetch("https://oakberry-backend.vercel.app/foodItems")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  // Handle deleting an item by ID
  const handleDelete = (id) => {
    fetch(`https://oakberry-backend.vercel.app/foodItems/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setItems(items.filter((item) => item.id !== id)); // Update the state
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  // Filter items based on search query
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 w-80 mx-auto bg-white mt-20">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Current Items
      </h2>

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name or category"
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul className="mt-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-2 border-b border-gray-200"
            >
              <div>
                <img className="w-20 mb-2" src={item.imageUrl} alt="" />
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-600">No items match your search.</p>
        )}
      </ul>
    </div>
  );
}

export default DeleteMenu;
