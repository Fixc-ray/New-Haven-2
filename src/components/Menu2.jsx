import React, { useState } from "react";
import MenuCards from "../components/MenuCards";

const Menu2 = ({ addToCart }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMenu = async (menuType) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://new-haven-backend.vercel.app/${menuType}`
      );
      const data = await response.json();
      setMenuItems(data);
      setFilteredItems(data); // Initially set filtered items to all items
      setSelectedMenu(menuType);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter the menu items based on the search term
    const filtered = menuItems.filter((item) =>
      item.name.toLowerCase().includes(term)
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
        Restaurant Menu
      </h1>

      {!selectedMenu ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <MenuCards title="Breakfast" onClick={() => fetchMenu("Breakfast")} />
          <MenuCards
            title="Main Dishes"
            onClick={() => fetchMenu("MainDishes")}
          />
          <MenuCards title="Sides" onClick={() => fetchMenu("Sides")} />
        </div>
      ) : (
        <div>
          <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow w-full sm:w-auto"
            onClick={() => setSelectedMenu(null)}
          >
            Back to Menu
          </button>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            {selectedMenu} Items
          </h2>

          {/* Search Bar */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search items..."
            className="mb-4 w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul className="bg-white rounded shadow p-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <li
                    key={item.id}
                    className="border-b last:border-b-0 py-4 flex flex-col sm:flex-row items-start sm:items-center"
                  >
                    {/* Left-aligned Image */}
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded mb-2 sm:mb-0 sm:mr-4"
                      />
                    )}

                    {/* Name and Price */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">ksh {item.price}</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 mt-2 sm:mt-0"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-gray-600">No items found.</p>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu2;
