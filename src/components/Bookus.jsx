import { useState } from "react";

export default function BookingForm() {
  const [bookingType, setBookingType] = useState("in-house");
  
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-xl font-bold text-center mb-4">Restaurant Booking Form</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="w-full p-2 border rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input type="tel" className="w-full p-2 border rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Booking Type</label>
          <select
            className="w-full p-2 border rounded-md"
            value={bookingType}
            onChange={(e) => setBookingType(e.target.value)}
          >
            <option value="in-house">In-House</option>
            <option value="catering">Outside Catering</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Event</label>
          <input type="text" className="w-full p-2 border rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input type="date" className="w-full p-2 border rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Time</label>
          <input type="time" className="w-full p-2 border rounded-md" required />
        </div>
        {bookingType === "catering" && (
          <div>
            <label className="block text-sm font-medium">Event Location</label>
            <input type="text" className="w-full p-2 border rounded-md" required />
          </div>
        )}
        <button className="w-full bg-blue-600 text-white p-2 rounded-md">Submit Booking</button>
      </form>
    </div>
  );
}
