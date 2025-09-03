import React from "react";
import { Link } from "react-router-dom";


export default function Landingpage() {
  return (
    <>
      <nav className="land-nav mt-3 text-center">
        <h1 className="btn btn-dark py-4 px-4 d-inline m-3">
          <Link to="/signup" className="text-decoration-none fs-2">
            Sign in
          </Link>
        </h1>
        <h1 className="btn btn-dark py-4 px-4 d-inline m-3">
          <Link to="/trackpage" className="text-decoration-none fs-2">
            Track Order
          </Link>
        </h1>
        <h1 className="btn btn-dark py-4 px-4 d-inline m-3">
          <Link to="/landingpage" className="text-decoration-none fs-2">
            Home
          </Link>
        </h1>

      </nav>
    </>
  );
}
