import React, { useState } from "react";
import emailjs from "emailjs-com";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const emailParams = {
      to_email: "rayjustin481@gmail.com", 
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      reservation_date: formData.date,
      reservation_time: formData.time,
      guests: formData.guests,
      special_requests: formData.specialRequests,
    };

    emailjs
      .send(
        "service_koac7yy", 
        "template_wgpp21p",
        emailParams,
        "m5okyqReJXrsKPd_J"
      )
      .then(() => {
        alert("Reservation email sent successfully!");

        
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "",
          specialRequests: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Error sending email. Please try again.");
      });
  };

  return (
    <div className="flex pt-20 justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Reserve A Seat With Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your full name"
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
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
              Reservation Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
              Reservation Time
            </label>
            <input
              type="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter the number of guests"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="specialRequests" className="block text-gray-700 font-semibold mb-2">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
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

// import { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import emailjs from "emailjs-com";

// // Fix marker icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

// export default function BookingForm() {
//   const [bookingType, setBookingType] = useState("in-house");
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     event: "",
//     date: "",
//     time: "",
//     location: "",
//   });
//   const [position, setPosition] = useState(null);

//   useEffect(() => {
//     if (bookingType === "catering") {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (pos) => {
//             setPosition([pos.coords.latitude, pos.coords.longitude]);
//           },
//           (error) => console.error("Geolocation error:", error)
//         );
//       }
//     }
//   }, [bookingType]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const emailParams = {
//       to_email: "rayjustin481@gmail.com",
//       from_name: formData.name,
//       phone: formData.phone,
//       event: formData.event,
//       reservation_date: formData.date,
//       reservation_time: formData.time,
//       location: bookingType === "catering" ? formData.location : "N/A",
//     };

//     emailjs
//       .send(
//         "service_koac7yy",
//         "template_wgpp21p",
//         emailParams,
//         "m5okyqReJXrsKPd_J"
//       )
//       .then(() => {
//         alert("Reservation email sent successfully!");
//         setFormData({
//           name: "",
//           phone: "",
//           event: "",
//           date: "",
//           time: "",
//           location: "",
//         });
//       })
//       .catch((error) => {
//         console.error("Failed to send email:", error);
//         alert("Error sending email. Please try again.");
//       });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
//       <h2 className="text-xl font-bold text-center mb-4">Restaurant Booking Form</h2>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label className="block text-sm font-medium">Name</label>
//           <input type="text" name="name" className="w-full p-2 border rounded-md" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Phone</label>
//           <input type="tel" name="phone" className="w-full p-2 border rounded-md" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Booking Type</label>
//           <select className="w-full p-2 border rounded-md" value={bookingType} onChange={(e) => setBookingType(e.target.value)}>
//             <option value="in-house">In-House</option>
//             <option value="catering">Outside Catering</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Event</label>
//           <input type="text" name="event" className="w-full p-2 border rounded-md" value={formData.event} onChange={handleChange} required />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Date</label>
//           <input type="date" name="date" className="w-full p-2 border rounded-md" value={formData.date} onChange={handleChange} required />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Time</label>
//           <input type="time" name="time" className="w-full p-2 border rounded-md" value={formData.time} onChange={handleChange} required />
//         </div>
//         {bookingType === "catering" && position && (
//           <div>
//             <label className="block text-sm font-medium">Event Location</label>
//             <input 
//               type="text" 
//               name="location" 
//               className="w-full p-2 border rounded-md" 
//               value={formData.location} 
//               onChange={handleChange} 
//               placeholder="Enter location or use map"
//               required 
//             />
//             <div className="mt-4 w-full h-64">
//               <MapContainer center={position} zoom={16} className="w-full h-full rounded-md">
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={position} draggable={true} eventHandlers={{
//                   dragend: (e) => {
//                     const { lat, lng } = e.target.getLatLng();
//                     setPosition([lat, lng]);
//                   }
//                 }}>
//                   <Popup>Your event location</Popup>
//                 </Marker>
//               </MapContainer>
//             </div>
//           </div>
//         )}
//         <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Submit Booking</button>
//       </form>
//     </div>
//   );
// }
