import React from "react";
import { Link } from "react-router-dom";

export default function Trackorderpage() {
  return (
    <div className="track-page bg-dark pt-3">
      <div className="track-input-section text-center d-flex align-items-center justify-content-center flex-wrap gap-3 mt-20">
        <input
          type="text"
          placeholder="Enter your reference number"
          className="track-input bg-light"
        />
        <button className="btn btn-light track-btn">
          <Link className="text-decoration-none text-dark fw-bold">Track</Link>
        </button>
      </div>

      <div className="track-info bg-light mt-4 pt-5 pb-4 mx-auto">
        <h6 className="ps-4 fw-bold">Shipment#</h6>
        <h6 className="ps-4">CR6525E52</h6>
        <hr className="border border-2 border-dark" />

        <div className="track-details d-flex justify-content-start align-items-center gap-4 ps-4 mt-4 mb-4 flex-wrap">
          <div className="track-box bg-dark"></div>
          <div className="track-text">
            <small className="fw-bold">
              Delivery Successful <br /> Destination Country: UK <br />
              Shipment #: CR6525E52 <br />
              Date: Thu, 22-07-25 <br /> Time: 12:56 hours
            </small>
          </div>
        </div>

        <hr className="border border-2 border-dark" />
      </div>
    </div>
  );
}
