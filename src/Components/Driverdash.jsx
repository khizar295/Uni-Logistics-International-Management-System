import React from "react";
import { Link } from "react-router-dom";

export default function Driverdash() {
  return (
    <div className="driverdash-container">
      <div className="container customer-profile text-center">
        <div className="row">
          <div className="col-12 fw-bold fs-3 mt-5">Welcome Driver</div>
        </div>

        <div className="row">
          <div className="col-12 fw-bold fs-4 my-5">
            Do you want to Update your Progress?
          </div>
        </div>

        <div className="driverdash-buttons d-flex justify-content-center gap-5 flex-wrap">
          <div className="logo">
            <h3 className="btn btn-dark fs-4 px-5 py-3">
              <Link to="/driverprofile" className="text-decoration-none text-light">
                Yes
              </Link>
            </h3>
          </div>
          <div className="logo">
            <h3 className="btn btn-dark fs-4 px-5 py-3">
              <Link to="/profile" className="text-decoration-none text-light">
                No
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
