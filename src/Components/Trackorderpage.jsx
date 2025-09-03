import React from "react";
import { Link } from "react-router-dom";

export default function Trackorderpage() {
  return (
    <div className="track-in1 bg-dark pt-1">
      <div className="track-in1-1 text-center d-flex align-items-center justify-content-center gap-3">
        <input
          type="text"
          placeholder="Enter your reference number"
          className="bg-light"
        />
        <button className="btn btn-light py-3 px-5">
          <Link className="text-decoration-none text-dark fw-bold">Track</Link>
        </button>
      </div>
      <div className="track-in1-2 bg-light mt-3 pt-5">
        <h6 className="ps-5">Shipment#</h6>
        <h6 className="ps-5">CR6525E52</h6>
        <hr className="border border-2 border-dark" />
        <div className="track-in-box d-flex justify-content-start align-items-center gap-5 ps-5 mt-5 mb-5">
          <div className="track-box bg-dark">.</div>
          <div className="track-simple">
            <small className="fw-bold">
              Delivery Successfull <br /> Destination Country: UK <br />{" "}
              Shipment # : CR6525E52 <br />
              Date: Thu, 22-07-25 <br /> Time: 12:56 hours
            </small>
          </div>
        </div>
        <hr className="border border-2 border-dark" />
      </div>
    </div>
  );
}
