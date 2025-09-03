import React from "react";
import { Link } from "react-router-dom";

export default function Adminnewship2() {
  return (
    <div className="newship2">
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
            <Link
              to="/adminnewship"
              className="text-decoration-none text-light"
            >
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

      <div className="container bg-secondary pt-3 ps-5 mt-3 pb-3 rounded">
        <small className="text-light fw-bold">Shipping Details:</small> <br />
        <div className="mt-3 fw-bold text-light mb-4">
          <small>What are the Contents of the shipment?</small> <br />
          <input type="radio" name="shipment" /> Document{" "}
          <input type="radio" name="shipment" /> Packages
        </div>
        <div className="row fw-bold text-light mb-3 detail-inp">
          <small>
            Please provide additional details on the contents of the shipment.
          </small>{" "}
          <br />
          <input type="text" className="w-50" />
        </div>
        <div className="row mt-3">
          <small className="fw-bold text-light mt-3">Select Packaging</small>
          <div className="row mt-4 border-row p-3">
            <div className="col-4 fw-bold text-light ms-4">
              Packaging: <br /> <input type="text" className="w-100" />
            </div>
            <div className="col-3 fw-bold text-light">
              Quality: <br /> <input type="text" />
            </div>
            <div className="col-3 fw-bold text-light">
              Weight: <br /> <input type="text" />
            </div>
          </div>
        </div>
        <div className="col-6 m-auto">
          <button className="btn btn-dark mt-5 w-100">
            <Link to="/adminnewship" className="text-decoration-none">
              Go Back
            </Link>
          </button>
        </div>
        <div className="col-6 mt-1 mx-auto ">
          <button className="btn btn-dark w-100">
            <Link
              to="/adminnewship/adminnewship2/adminnewship3"
              className="text-decoration-none"
            >
              Next
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
