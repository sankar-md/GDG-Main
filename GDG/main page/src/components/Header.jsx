import React from "react";
import logo from "./assets/gdg.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3 bg-white border-b-2 border-gray-300 sticky top-0 z-20">
      <div className="font-bold text-gray-800 text-lg flex items-center">
        <img className="w-16 h-16" src={logo} alt="GDG Logo" />
        <h1 className="font-bold ml-4">GDG on Campus - SIMATS</h1>
      </div>
      <button className="bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-green-700">
        Join Now
      </button>
    </header>
  );
};

export default Header;
