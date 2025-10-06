import React from "react";
import { Link } from "react-router-dom";

export default function Newship3() {
  return (
    <div className="newship3 min-h-screen mt-28">
      <div className="dash-nav bg-gray-700 text-white px-5 py-3 flex flex-wrap justify-center md:justify-start gap-6">
        <Link to="/dashboard" className="nav-link">Home</Link>
        <Link to="/newship" className="nav-link">Ship</Link>
        <Link to="/trackpage" className="nav-link">Track</Link>
        <Link to="/profile" className="nav-link">My Profile</Link>
      </div>

      <div className="container mx-auto bg-gray-700 text-white p-6 mt-10 rounded-lg shadow-lg max-w-5xl">
        <div className="mb-6">
          <small className="font-semibold">Schedule a date for the Shipment:</small> <br />
          <input
            type="date"
            className="input-field mt-3 mb-3"
          />
          <br />
          <small className="font-semibold text-gray-300">
            The Shipment will be delivered on 4 xyz 3232
          </small>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <small className="font-semibold block mb-2">Select a mode of Payment:</small>
            <select className="input-field w-full">
              <option value="">Online</option>
              <option value="">Cash</option>
            </select>
          </div>

          <div>
            <small className="font-semibold block mb-2">If Online: Select Type</small>
            <div className="flex flex-col gap-3 mt-3">
              <label>
                <input type="radio" name="payment" className="mr-2" /> JazzCash
              </label>
              <label>
                <input type="radio" name="payment" className="mr-2" /> EasyPaisa
              </label>
              <label>
                <input type="radio" name="payment" className="mr-2" /> Credit / Debit Card
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-10">
          <Link to="/newship/newship2" className="w-full md:w-1/2">
            <button className="nav-btn w-full">Go Back</button>
          </Link>
          <Link to="/newship/newship2/newship3/confirmship" className="w-full md:w-1/2">
            <button className="nav-btn w-full">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
