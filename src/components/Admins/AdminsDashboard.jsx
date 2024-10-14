// src/components/Admins/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Adjust the path to your JSON file as needed.
const MENU_JSON_URL = 'https://oakberry-backend.vercel.app/foodItems'; 

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
        console.error('Failed to fetch menu items:', error);
      }
    };

    fetchMenuItems();
  }, []); // Empty dependency array to run once when component mounts

  return (
    <div className="min-h-screen bg-gray-100 mt-16 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
          <p className="text-2xl font-bold text-green-600">120</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Monthly Revenue</h2>
          <p className="text-2xl font-bold text-blue-600">$5,000</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Total Menu Items</h2>
          {/* Display the dynamic menu item count here */}
          <p className="text-2xl font-bold text-purple-600">{menuCount}</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">New Reservations</h2>
          <p className="text-2xl font-bold text-red-600">8 Today</p>
        </div>
      </div>

      {/* Menu Management Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Menu Management</h2>
        <div className="flex space-x-4 ml-28 pl-28">
          <Link
            to="/admin/add-menu"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Add New Menu Item
          </Link>
          <Link
            to="/Menu"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            View All Menu Items
          </Link>
          <Link
            to="/admin/delete"
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            DELETE A MENU ITEM
          </Link>
          <Link
            to="/admin/edit"
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
          >
            EDIT A MENU ITEM
          </Link>
        </div>
      </div>

      {/* Orders Management Table */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Orders Management</h2>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Customer</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4">#001</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4 text-green-600">Completed</td>
              <td className="py-2 px-4">$45.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">#002</td>
              <td className="py-2 px-4">Jane Smith</td>
              <td className="py-2 px-4 text-yellow-600">Pending</td>
              <td className="py-2 px-4">$30.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Reservations Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Reservations Management</h2>
        <ul className="list-disc list-inside">
          <li>Reservation by Mark at 7:00 PM</li>
          <li>Reservation by Alice at 8:30 PM</li>
        </ul>
      </div>

      {/* Logout Button */}
      <button
        className="mt-8 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => {
          localStorage.removeItem('adminToken');
          window.location.href = '/admin/login';
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
