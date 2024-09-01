import React, { useState } from "react";

function Reservation() {
  return (
    <div className="flex pt-20 justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Reserve A Sit With us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Reservation Date</label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Reservation Time</label>
            <input
              type="time"
              id="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter the number of guests"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="special-requests" className="block text-gray-700 font-semibold mb-2">Special Requests</label>
            <textarea
              id="special-requests"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Any special requests?"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
