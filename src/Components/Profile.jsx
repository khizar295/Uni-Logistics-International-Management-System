import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div className="container text-center profile-page">
        <div className="row">
          <h3 className="fw-bold">Welcome</h3>
        </div>
        <div className="row">
          <h3 className="mt-2">Who you are?</h3>
        </div>
        <div className="row mt-2">
          <div className="col-6 mx-auto">
            <button className="w-100 btn btn-dark">
              <Link to="/customerprofile" className="text-decoration-none">
                Customer
              </Link>
            </button>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-6 mx-auto">OR</div>
        </div>
        <div className="row">
          <div className="col-6 mx-auto">
            <button className="w-100 btn btn-dark">
              <Link to="/adminprofile" className="text-decoration-none">
                Admin
              </Link>
            </button>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-6 mx-auto">OR</div>
        </div>
        <div className="row">
          <div className="col-6 mx-auto">
            <button className="w-100 btn btn-dark">
              <Link to="/driverdash" className="text-decoration-none">
                Driver
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
