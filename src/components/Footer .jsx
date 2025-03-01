import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTiktok} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-8">
      <div className="container mx-auto">
        {/* First Row - Address, Phone, Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2" />
              Where to Find Us
            </h3>
            <p>WestField Hub</p>
            <p>Likoni cl</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center mb-4">
              <FaPhoneAlt className="mr-2" />
              Call Us
            </h3>
            <p>0110391729</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold flex items-center mb-4">
              <FaEnvelope className="mr-2" />
              Email Us
            </h3>
            <p>newhaven.eateries@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
          <div>
            <h3 className="text-xl font-bold">New Haven</h3>
            <p className="text-sm mt-2">Your trusted partner for great taste of African Dishes.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="grid grid-cols-3">
              <a
                href="https://www.instagram.com/newhavenrestaurant/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="ml-16"
              >
                <FaInstagram className="w-10 h-10" />
              </a>
              <a
                href="https://www.tiktok.com/@new.haveneateries"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="ml-6"
              >
                <FaTiktok className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
