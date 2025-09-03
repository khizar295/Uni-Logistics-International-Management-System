import React from "react";
import { Link } from "react-router-dom";
import Landingpage from "./Landingpage";

export default function Login() {
  return (
    <div>
      <div className="sign-in1 bg-secondary mt-5 pt-3">
        <input type="text" placeholder="Username" className="mt-5" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <div className="sign-in1-1">
          <div className="pt-3 pe-3 ps-3">
            <small className="fw-bold">This account is used by:</small>{" "}
            <select name="" id="" className="fw-bold border-dark border-2">
              <option value="">Customer</option>
              <option value="">Admin</option>
            </select>
          </div>{" "}
          <br />
          <div className="new-user mb-1">
            <small className="fw-bold">New User?</small>
            <Link to="/signup" className="ms-2 text-light fw-bold">
              Create Account
            </Link>
          </div>{" "}
          <br />
          <button className="btn btn-dark">
            <Link to="/profile" className="text-decoration-none text-light">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
