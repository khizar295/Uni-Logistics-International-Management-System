import React from "react";
import { Link } from "react-router-dom";

export default function Customerprofile() {
  return (
    <div>
      <div className="container customer-profile">
        <div className="row text-center">
          <div className="col-6 mx-auto fw-bold fs-3 mt-5">
            Welcome Customer
          </div>
        </div>
        <div className="row text-center">
          <div className="col-6 mx-auto fw-bold fs-4 my-5">
            What do you want to explore?
          </div>
        </div>

        
        <div className="dash-nav mt-2 ps-5 bg-secondary pt-2">
          <div className="logo btn d-inline">
            <h3 className="d-inline">
              <Link to="/dashboard" className="text-decoration-none text-light">
                Home
              </Link>
            </h3>
          </div>
          <div className="logo btn d-inline">
            <h3 className="d-inline">
              <Link to="/newship" className="text-decoration-none text-light">
                Ship
              </Link>
            </h3>
          </div>
          <div className="logo btn d-inline">
            <h3 className="d-inline">
              <Link
                to="/trackpage"
                className="text-decoration-none text-light"
              >
                Track
              </Link>
            </h3>
          </div>
          <div className="profile btn d-inline">
            <h3 className="d-inline">
              <Link to="/profile" className="text-decoration-none text-light">
                My Profile
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
