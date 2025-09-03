import React from "react";
import { Link } from "react-router-dom";

export default function Confirmadminship() {
  return (
    <div>
      <div className="dash-nav mt-2 ps-5 bg-secondary pt-2">
        <div className="logo btn d-inline">
          <h3 className="d-inline">
            <Link
              to="/admindashboard"
              className="text-decoration-none text-light"
            >
              Dashboard
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
            <Link to="/trackpage" className="text-decoration-none text-light">
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

      <div className="container text-center mt-5">
        <div className="row m-3">
          <h3>Shipment Confirmed</h3>
        </div>
        <div className="row w-25 mx-auto">
          <div className="confirm-box m-3"></div>
        </div>
        <div className="row m-3">
          <small className="fw-bold">
            Pickup is scheduled for 4 XXZ 5626 and the package delivered on 6
            XXD 5645
          </small>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-6 mx-auto">
            <button className="btn btn-dark w-100">
              <Link to="/admindashboard" className="text-decoration-none">
                View All Shipments
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
