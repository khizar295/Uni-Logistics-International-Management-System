import React from "react";
import { Link } from "react-router-dom";

export default function Adminnewship3() {
  return (
    <div className="newship3">
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
            <Link to="/trackgpage" className="text-decoration-none text-light">
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

      <div className="container bg-secondary mt-5 p-5 rounded h-77">
        <div className="row">
          <small className="fw-bold text-light">
            Schedule a date for the Shipment:
          </small>{" "}
          <br />
          <input
            type="date"
            className="w-25 p-5 mb-3 ms-5 border-dark border-2"
          />{" "}
          <br />
          <small className="fw-bold text-light">
            The Shipment will be delivered on 4 xyz 3232
          </small>
        </div>
        <div className="row mt-5 ms-2">
          <div className="col-6">
            <small className="fw-bold text-light">
              Select a mode of Payment:
            </small>{" "}
            <br />
            <select name="" id="" className="w-75 py-5 border-dark border-2">
              <option value="">Online</option>
              <option value="">Cash</option>
            </select>
          </div>
          <div className="col-6">
            <small className="fw-bold text-light">
              If Online:---Select Type:-
            </small>{" "}
            <br />
            <input type="radio" name="payment" className="mt-4" />{" "}
            <small className="fw-bold text-light">JazzCash</small>
            <br /> <input type="radio" name="payment" className="mt-3" />{" "}
            <small className="fw-bold text-light">EasyPaisa</small> <br />{" "}
            <input type="radio" name="payment" className="mt-3" />{" "}
            <small className="fw-bold text-light">Credit / Debit Card</small>
          </div>
        </div>
        <div className="col-6 m-auto">
          <button className="btn btn-dark mt-5 w-100">
            <Link
              to="/adminnewship/adminnewship2"
              className="text-decoration-none"
            >
              Go Back
            </Link>
          </button>
        </div>
        <div className="col-6 mt-1 mx-auto ">
          <button className="btn btn-dark w-100">
            <Link
              to="/adminnewship/adminnewship2/adminnewship3/confirmadminship"
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
