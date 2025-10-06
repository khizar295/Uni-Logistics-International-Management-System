import React from "react";
import { Link } from "react-router-dom";

export default function Adminprofile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mt-10">Welcome Admin</h2>
        </div>

        <div className="text-center my-8">
          <h3 className="text-2xl font-semibold">
            What do you want to explore?
          </h3>
        </div>

        <div className="admin-nav bg-gray-700 py-4 rounded-lg flex justify-center gap-6 flex-wrap">
          <Link
            to="/admindashboard"
            className="bg-gray-900 text-white text-lg font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/adminnewship"
            className="bg-gray-900 text-white text-lg font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Ship
          </Link>
          <Link
            to="/trackgpage"
            className="bg-gray-900 text-white text-lg font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Track
          </Link>
          <Link
            to="/profile"
            className="bg-gray-900 text-white text-lg font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            My Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
