import React from "react";
import { Link } from "react-router-dom";

export default function Customerprofile() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 mt-9">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Welcome, Customer 👋
        </h1>
        <p className="text-lg text-gray-700">What do you want to explore?</p>
      </div>

      <nav className="dash-nav bg-gray-900 text-white rounded-2xl shadow-lg flex flex-wrap justify-center gap-6 py-5 px-8 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] transition-all duration-300">
        <Link
          to="/dashboard"
          className="text-xl font-semibold hover:text-gray-300 transition"
        >
          Home
        </Link>
        <Link
          to="/newship"
          className="text-xl font-semibold hover:text-gray-300 transition"
        >
          Ship
        </Link>
        <Link
          to="/trackpage"
          className="text-xl font-semibold hover:text-gray-300 transition"
        >
          Track
        </Link>
        <Link
          to="/profile"
          className="text-xl font-semibold hover:text-gray-300 transition"
        >
          My Profile
        </Link>
      </nav>
    </div>
  );
}
