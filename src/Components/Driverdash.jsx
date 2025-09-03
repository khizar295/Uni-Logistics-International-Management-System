import React from "react";
import { Link } from "react-router-dom";

export default function Driverdash() {
  return (
    <div>
      <div className="container customer-profile">
        <div className="row text-center">
          <div className="col-6 mx-auto fw-bold fs-3 mt-5">Welcome Driver</div>
        </div>
        <div className="row text-center">
          <div className="col-6 mx-auto fw-bold fs-4 my-5">
            Do you want to Update your Progress?
          </div>
        </div>

       
        <div className="d-flex justify-content-center gap-5">
          <div className="logo d-inline">
            <h3 className="d-inline btn btn-dark fs-2 px-5">
              <Link
                to="/driverprofile"
                className="text-decoration-none"
              >
                Yes
              </Link>
            </h3>
          </div>
          <div className="logo d-inline">
            <h3 className="d-inline btn btn-dark fs-2 px-5">
              <Link
                to="/profile"
                className="text-decoration-none"
              >
                No
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
