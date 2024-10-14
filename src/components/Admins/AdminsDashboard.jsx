// src/components/Admins/AdminDashboard.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Adjust the path to your JSON file as needed.
const MENU_JSON_URL = "https://oakberry-backend.vercel.app/foodItems";

const AdminDashboard = () => {
  const [menuCount, setMenuCount] = useState(0); // State for total menu items

  // Fetch menu items and update the count
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(MENU_JSON_URL);
        const data = await response.json();
        setMenuCount(data.length); // Set the menu count
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    fetchMenuItems();
  }, []); // Empty dependency array to run once when component mounts

  return (
    <div className="min-h-screen bg-gray-50 mt-16 p-8">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center">
        Admin Dashboard
      </h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center space-y-2 h-full">
          <h2 className="text-lg font-semibold text-gray-600 text-center">
            Total Menu Items
          </h2>
          <p className="text-3xl font-extrabold text-purple-700 mt-2">
            {menuCount}
          </p>
        </div>
      </div>

      {/* Menu Management Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Menu Management
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/admin/add-menu"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md transition-all duration-300"
          >
            Add New Menu Item
          </Link>
          <Link
            to="/Menu"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-all duration-300"
          >
            View All Menu Items
          </Link>
          <Link
            to="/admin/delete"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md transition-all duration-300"
          >
            DELETE A MENU ITEM
          </Link>
          <Link
            to="/admin/edit"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 shadow-md transition-all duration-300"
          >
            EDIT A MENU ITEM
          </Link>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center">
        <button
          className="mt-8 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg transition-all duration-300"
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin/login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
