import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom" 

function DeleteMenu() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);   
  const navigate = useNavigate()

  // Fetch items from the backend when the component loads
  useEffect(() => {
    fetch("https://oakberry-backend.vercel.app/foodItems")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  // Open the confirmation modal and set the item to be deleted
  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Handle the deletion after user confirms
  const handleDelete = () => {
    fetch(`https://oakberry-backend.vercel.app/foodItems/${selectedItem.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setItems(items.filter((item) => item.id !== selectedItem.id)); // Update the state
        setIsModalOpen(false); // Close the modal
        setSelectedItem(null); // Clear selected item
      })
      .catch((error) => console.error("Error deleting item:", error));
  };
  
  const back = () => {
    navigate("/admin/dashboard")
  }

  // Filter items based on the search query
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="p-6 w-80 mx-auto bg-white mt-20">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Current Items
        </h2>
        <button onClick={back} className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 focus:outline-none mb-4">Back</button>

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
                  onClick={() => openDeleteModal(item)}
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

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Confirm Deletion
            </h2>
            <p className="text-center mb-6">
              Are you sure you want to delete{" "}
              <strong>{selectedItem?.name}</strong>?
            </p>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setIsModalOpen(false)} // Close modal on cancel
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteMenu;
