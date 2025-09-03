import React from "react";
import { Link } from "react-router-dom";

export default function Adminnewship() {
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

      <div className="container bg-secondary pt-3 mt-5 pb-2 rounded">
        <div className="col-9 m-auto bg-light ps-5 pt-5 pb-5 mb-5 mt-5">
          <div className="row ship-fromto-row">
            <div className="col-6 border-start border-dark border-2">
              <h3>From:</h3>
              Name: <br />
              <input type="text" className="border-dark border-2" /> <br />
              Country: <br />
              <input type="text" className="border-dark border-2" /> <br />
              Address: <br />
              <input type="text" className="border-dark border-2" /> <br />
              E-Mail Address: <br />
              <input type="text" className="border-dark border-2" /> <br />
              <div className="row ship-code-row">
                <div className="col-3">
                  Zip Code: <br />
                  <input type="text" className="border-dark border-2" />
                </div>
                <div className="col-3">
                  City: <br />
                  <input type="text" className="border-dark border-2" />
                </div>
                <div className="col-3">
                  State: <br />
                  <input type="text" className="border-dark border-2" />
                </div>
              </div>
            </div>
            <div className="col-6 border-start border-dark border-2 ">
              <h3>To:</h3>
              Name: <br />
              <input type="text" className="border-dark border-2" /> <br />
              Country: <br />
              <input type="text" className="border-dark border-2" /> <br />
              Address: <br />
              <input type="text" className="border-dark border-2" /> <br />
              E-Mail Address: <br />
              <input type="text" className="border-dark border-2" /> <br />
              <div className="row ship-code-row">
                <div className="col-3">
                  Zip Code: <br />
                  <input type="text" className="border-dark border-2" />
                </div>
                <div className="col-3">
                  City: <br />
                  <input type="text" className="border-dark border-2" />
                </div>
                <div className="col-3">
                  State: <br />
                  <input type="text" className="border-dark border-2" />
                </div>
              </div>
              <div className="row">
                <div className="col-9 text-end">
                  <button className="btn btn-dark px-4 mt-5">
                    <Link
                      to="/adminnewship/adminnewship2"
                      className="text-decoration-none"
                    >
                      Next
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
