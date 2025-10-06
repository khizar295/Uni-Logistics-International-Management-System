import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 mt-9">
      <div className="bg-white shadow-2xl rounded-2xl w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] p-8 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Welcome</h3>
        <h3 className="text-xl text-gray-700 mb-8">Who are you?</h3>

        <div className="mb-6">
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full text-lg font-semibold transition">
            <Link to="/customerprofile" className="text-white no-underline">
              Customer
            </Link>
          </button>
        </div>

        <div className="text-gray-500 font-semibold mb-6">OR</div>

        <div className="mb-6">
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full text-lg font-semibold transition">
            <Link to="/adminprofile" className="text-white no-underline">
              Admin
            </Link>
          </button>
        </div>

        <div className="text-gray-500 font-semibold mb-6">OR</div>

        <div>
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full text-lg font-semibold transition">
            <Link to="/driverdash" className="text-white no-underline">
              Driver
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
