import React from "react";
import { Link } from "react-router-dom";

export default function Trackpage() {
  return (
    <div className="trackpage bg-dark d-flex justify-content-center align-items-center">
      <div className="trackpage-inner text-center">
        <input
          type="text"
          placeholder="Enter your reference number"
          className="trackpage-input bg-light"
        />
        <button className="btn btn-light trackpage-btn">
          <Link
            to="/trackorderpage"
            className="text-decoration-none text-dark fw-bold"
          >
            Track
          </Link>
        </button>
      </div>
    </div>
  );
}
