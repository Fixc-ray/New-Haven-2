import React, { useState, useEffect } from "react";

function EditMenu() {
  const [items, setItems] = useState([]); // Stores all items
  const [isEditing, setIsEditing] = useState(null); // Tracks the item being edited
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search input

  // Fetch all items when the component loads
  useEffect(() => {
    fetch("https://oakberry-backend.vercel.app/foodItems")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  // Set the form fields when an item is selected for editing
  const handleEdit = (item) => {
    setIsEditing(item.id); // Track which item is being edited
    setName(item.name);
    setPrice(item.price);
    setCategory(item.category);
    setImageUrl(item.image_url);
  };

  // Handle form submission to update the item
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedItem = {
      name,
      price,
      category,
      image_url,
    };

    fetch(`https://oakberry-backend.vercel.app/foodItems/${isEditing}`, {
      method: "PUT", // or PATCH for partial updates
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((item) => {
        // Update the items state with the modified item
        setItems((prevItems) =>
          prevItems.map((i) => (i.id === item.id ? item : i))
        );
        // Clear the form and reset the editing state
        setIsEditing(null);
        setName("");
        setPrice("");
        setCategory("");
        setImageUrl("");
      })
      .catch((error) => console.error("Error updating item:", error));
  };

  // Filter items based on the search query
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 w-80 mx-auto bg-white mt-20">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        EDIT ITEMS
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or category"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* If an item is selected for editing, show the form */}
      {isEditing ? (
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category:
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL:
          </label>
          <input
            type="text"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <p className="text-center text-gray-600 mb-6">
          Select an item to edit.
        </p>
      )}

      {/* Display the filtered items */}
      <ul className="mt-4">
        {filteredItems.map((item) => (
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
              onClick={() => handleEdit(item)}
              className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 focus:outline-none"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditMenu;
