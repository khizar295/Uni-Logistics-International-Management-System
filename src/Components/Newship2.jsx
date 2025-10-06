import React from "react";
import { Link } from "react-router-dom";

export default function Newship2() {
  return (
    <div className="newship2 min-h-screen mt-28">
      <div className="dash-nav bg-gray-700 text-white px-5 py-3 flex flex-wrap justify-center md:justify-start gap-6">
        <Link to="/dashboard" className="nav-link">Home</Link>
        <Link to="/newship" className="nav-link">Ship</Link>
        <Link to="/trackpage" className="nav-link">Track</Link>
        <Link to="/profile" className="nav-link">My Profile</Link>
      </div>

      <div className="container mx-auto bg-gray-700 text-white p-6 mt-6 rounded-lg shadow-lg">
        <small className="font-semibold">Shipping Details:</small>

        <div className="mt-4 font-semibold mb-5">
          <small>What are the contents of the shipment?</small> <br />
          <label className="mr-4">
            <input type="radio" name="shipment" className="mr-2" /> Document
          </label>
          <label>
            <input type="radio" name="shipment" className="mr-2" /> Packages
          </label>
        </div>

        <div className="fw-bold text-light mb-5">
          <small>Please provide additional details on the contents of the shipment.</small> <br />
          <input type="text" className="detail-input mt-2" placeholder="Enter shipment details..." />
        </div>

        <div className="mt-5">
          <small className="font-semibold">Select Packaging</small>
          <div className="border-section mt-4 p-5 rounded-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="font-semibold block mb-2">Packaging:</label>
                <input type="text" className="input-field w-full" placeholder="Enter packaging type" />
              </div>
              <div className="flex-1">
                <label className="font-semibold block mb-2">Quality:</label>
                <input type="text" className="input-field w-full" placeholder="Enter quality" />
              </div>
              <div className="flex-1">
                <label className="font-semibold block mb-2">Weight:</label>
                <input type="text" className="input-field w-full" placeholder="Enter weight" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-8">
          <Link to="/newship" className="w-full md:w-1/2">
            <button className="nav-btn w-full">Go Back</button>
          </Link>
          <Link to="/newship/newship2/newship3" className="w-full md:w-1/2">
            <button className="nav-btn w-full">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
