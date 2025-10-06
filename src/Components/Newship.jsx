import React from "react";
import { Link } from "react-router-dom";

export default function Newship() {
  return (
    <div>
      <div className="dash-nav bg-gray-700 text-white px-5 py-3 flex flex-wrap justify-center md:justify-start gap-6 mt-28">
        <Link to="/dashboard" className="nav-link">Home</Link>
        <Link to="/newship" className="nav-link">Ship</Link>
        <Link to="/trackpage" className="nav-link">Track</Link>
        <Link to="/profile" className="nav-link">My Profile</Link>
      </div>

      <div className="container mx-auto bg-gray-700 text-white p-4 mt-8 rounded-lg">
        <div className="inner-form bg-white text-black p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="from-section md:w-1/2 border-l-4 border-gray-700 pl-6">
              <h3 className="font-bold text-xl mb-4">From:</h3>
              <label className="block mb-2">Name:</label>
              <input type="text" className="input-field" /> <br />

              <label className="block mt-3 mb-2">Country:</label>
              <input type="text" className="input-field" />

              <label className="block mt-3 mb-2">Address:</label>
              <input type="text" className="input-field" />

              <label className="block mt-3 mb-2">E-Mail Address:</label>
              <input type="text" className="input-field" />

              <div className="flex gap-4 mt-4 flex-wrap">
                <div>
                  <label className="block mb-2">Zip Code:</label>
                  <input type="text" className="input-small" />
                </div>
                <div>
                  <label className="block mb-2">City:</label>
                  <input type="text" className="input-small" />
                </div>
                <div>
                  <label className="block mb-2">State:</label>
                  <input type="text" className="input-small" />
                </div>
              </div>
            </div>

            <div className="to-section md:w-1/2 border-l-4 border-gray-700 pl-6">
              <h3 className="font-bold text-xl mb-4">To:</h3>
              <label className="block mb-2">Name:</label>
              <input type="text" className="input-field" /> <br />

              <label className="block mt-3 mb-2">Country:</label>
              <input type="text" className="input-field" />

              <label className="block mt-3 mb-2">Address:</label>
              <input type="text" className="input-field" />

              <label className="block mt-3 mb-2">E-Mail Address:</label>
              <input type="text" className="input-field" />

              <div className="flex gap-4 mt-4 flex-wrap">
                <div>
                  <label className="block mb-2">Zip Code:</label>
                  <input type="text" className="input-small" />
                </div>
                <div>
                  <label className="block mb-2">City:</label>
                  <input type="text" className="input-small" />
                </div>
                <div>
                  <label className="block mb-2">State:</label>
                  <input type="text" className="input-small" />
                </div>
              </div>

              <div className="text-right mt-8">
                <Link to="/newship/newship2">
                  <button className="next-btn">Next</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
