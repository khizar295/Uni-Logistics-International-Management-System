import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 mt-9">
      <div className="bg-white shadow-2xl rounded-2xl w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Username"
            className="w-full h-12 px-4 mb-4 border-2 border-gray-400 rounded-full focus:outline-none focus:border-gray-700 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 mb-4 border-2 border-gray-400 rounded-full focus:outline-none focus:border-gray-700 transition"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full h-12 px-4 mb-6 border-2 border-gray-400 rounded-full focus:outline-none focus:border-gray-700 transition"
          />

          <div className="w-full mb-6">
            <small className="font-semibold text-gray-700">
              This account is used by:
            </small>
            <select className="w-full h-12 mt-2 border-2 border-gray-400 rounded-full px-3 font-semibold text-gray-700 focus:outline-none focus:border-gray-700 transition">
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="flex justify-center items-center mb-6">
            <small className="font-semibold text-gray-700">
              Already signed up?
            </small>
            <Link
              to="/signup/login"
              className="ml-2 font-semibold text-blue-600 hover:text-blue-800 transition"
            >
              Login
            </Link>
          </div>

          <button className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-lg font-semibold transition">
            <Link
              to="/signup/login"
              className="text-white text-decoration-none"
            >
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
