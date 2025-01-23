import React from "react";

const MenuCards = ({ title, onClick }) => {
  return (
    <div
      className="border rounded-lg shadow-lg p-4 text-center bg-white hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
  );
};

export default MenuCards;
