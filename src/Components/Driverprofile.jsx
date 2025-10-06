import React from "react";
import { Link } from "react-router-dom";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Driverprofile() {
  const shipments = [
    {
      id: "FGR5151RR9",
      name: "John Smith",
      orderDate: "2023-10-01",
      expDeliveryDate: "2023-10-05",
      status: "In Transit",
    },
    {
      id: "TYO6562EE5",
      name: "Jane Smith",
      orderDate: "2023-10-02",
      expDeliveryDate: "2023-10-06",
      status: "Delivered",
    },
    {
      id: "ERE5461RE3",
      name: "Alice Johnson",
      orderDate: "2023-10-03",
      expDeliveryDate: "2023-10-07",
      status: "Pending",
    },
    {
      id: "GDG5615DF5",
      name: "Bob Brown",
      orderDate: "2023-10-04",
      expDeliveryDate: "2023-10-08",
      status: "In Transit",
    },
    {
      id: "HJJ8877RE1",
      name: "Charlie Davis",
      orderDate: "2023-10-05",
      expDeliveryDate: "2023-10-09",
      status: "Delivered",
    },
  ];

  return (
    <div className="driver-profile mt-23">
      <nav className="driver-nav bg-secondary d-flex justify-content-between align-items-center px-4 py-3">
        <h3 className="text-light m-0">Driver Dashboard</h3>
        <Link to="/landingpage" className="btn btn-dark px-4 py-2">
          Logout
        </Link>
      </nav>

      <div className="dash-nav bg-secondary py-2 px-4 d-flex gap-4 justify-content-center flex-wrap">
        <Link to="/driverprofile" className="text-decoration-none text-light fw-bold">
          Dashboard
        </Link>
        <Link to="/profile" className="text-decoration-none text-light fw-bold">
          My Profile
        </Link>
      </div>

      <div className="container mt-4">
        <div className="text-center">
          <h4 className="fw-bold">Welcome Back, Driver 👋</h4>
          <p className="fw-semibold mt-2">Shipments Dashboard</p>
        </div>
      </div>

      <div className="container mt-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <small className="fw-bold">Displaying 1-5 of 5 results</small>
          <div className="pagination-icons d-flex align-items-center gap-2 mt-2 mt-md-0">
            <MdSkipPrevious className="bg-secondary cust-icon" />
            <GrFormPrevious className="bg-secondary cust-icon" />
            <small className="fw-bold">1</small>
            <GrFormNext className="bg-secondary cust-icon" />
            <MdSkipNext className="bg-secondary cust-icon me-3" />
          </div>
        </div>
      </div>

      <div className="container mt-4 border border-dark border-2 rounded p-4 bg-light">
        <div className="row fw-bold text-center table-header">
          <div className="col-6 col-md-2">Name</div>
          <div className="col-6 col-md-2">Shipment ID</div>
          <div className="col-6 col-md-2">Order Date</div>
          <div className="col-6 col-md-2">Exp. Delivery</div>
          <div className="col-6 col-md-2">Status</div>
          <div className="col-6 col-md-2">Completed</div>
        </div>
        <hr className="border border-dark border-2 mt-3" />

        {shipments.map((ele, index) => (
          <div key={index}>
            <div className="row text-center align-items-center">
              <div className="col-6 col-md-2">{ele.name}</div>
              <div className="col-6 col-md-2">{ele.id}</div>
              <div className="col-6 col-md-2">{ele.orderDate}</div>
              <div className="col-6 col-md-2">{ele.expDeliveryDate}</div>
              <div className="col-6 col-md-2">{ele.status}</div>
              <div className="col-6 col-md-2">
                <input type="checkbox" className="form-check-input" />
              </div>
            </div>
            <hr className="border border-dark border-1 mt-3" />
          </div>
        ))}

        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <button className="w-100 btn btn-dark py-2 mt-3">
              <Link to="/trackorderpage" className="text-decoration-none text-light">
                Submit Progress
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
