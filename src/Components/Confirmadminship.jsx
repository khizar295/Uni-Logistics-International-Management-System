import React from "react";
import { Link } from "react-router-dom";

export default function Confirmadminship() {
  return (
    <div className="confirmship mt-28">
      <div className="dash-nav bg-gray-700 text-white px-5 py-3 flex flex-wrap justify-center md:justify-start gap-6">
        <Link to="/dashboard" className="nav-link">Home</Link>
        <Link to="/adminnewship" className="nav-link">Ship</Link>
        <Link to="/trackpage" className="nav-link">Track</Link>
        <Link to="/profile" className="nav-link">My Profile</Link>
      </div>

      <div className="container text-center mt-5">
        <div className="row m-3">
          <h3 className="text-light">Shipment Confirmed</h3>
        </div>

        <div className="row justify-content-center">
          <div className="confirm-box m-3"></div>
        </div>

        <div className="row m-3">
          <small className="fw-bold text-light">
            Pickup is scheduled for 4 XXZ 5626 and the package will be delivered
            on 6 XXD 5645
          </small>
        </div>

        <div className="row mt-4 mb-4 justify-content-center">
          <div className="col-10 col-sm-6 col-md-4">
            <button className="btn btn-dark w-100">
              <Link
                to="/admindashboard"
                className="text-decoration-none text-light fw-bold"
              >
                View All Shipments
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
