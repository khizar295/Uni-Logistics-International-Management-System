import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <div className="sign-in1 bg-secondary mt-5 pt-1">
        <input type="text" placeholder="Username" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <input type="email" placeholder="E-mail" />
        <div className="sign-in1-1">
          <div className="p-3">
            <small className="fw-bold">This account is used by:</small>{" "}
            <select name="" id="" className="fw-bold border-dark border-2">
              <option value="">Customer</option>
              <option value="">Admin</option>
            </select>
          </div>{" "}
          <div className="new-user">
            <small className="fw-bold">Already Signed Up?</small>
            <Link to="/signup/login" className="ms-2 text-light fw-bold">
              Login
            </Link>
          </div>
          <br />
          <button className="btn btn-dark">
            <Link
              to="/signup/login"
              className="text-decoration-none text-light">
              Signup
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
