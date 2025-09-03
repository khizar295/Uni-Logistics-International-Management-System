import React from "react";
import { Link } from "react-router-dom";
import { MdSkipPrevious } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdSkipNext } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";

export default function Admindashboard() {
  const Array = [
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
      id: "GDG5615DF5",
      name: "Charlie Davis",
      orderDate: "2023-10-05",
      expDeliveryDate: "2023-10-09",
      status: "Delivered",
    },
  ];
  return (
    <div>
      <nav className="mt-3 ps-5 bg-secondary pt-4">
        <div className="logo btn btn-dark d-inline p-3">
          <h3 className="d-inline">
            <Link to="/landingpage" className="text-decoration-none text-light">
              Logout
            </Link>
          </h3>
        </div>
      </nav>
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

      <div className="mt-3 ms-5 mb-4">
        <small className="fw-bold">Welcome Back, Admin</small> <br />
        <small className="fw-bold">Shipments Dashboard</small>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <small className="fw-bold">Displaying 1-5 of 5 results</small>
          </div>
          <div className="col-6 cust-icon-parent">
            <MdSkipPrevious className="bg-secondary cust-icon" />{" "}
            <GrFormPrevious className="bg-secondary cust-icon" />{" "}
            <small>1</small> <GrFormNext className="bg-secondary cust-icon" />{" "}
            <MdSkipNext className="bg-secondary cust-icon me-5" />
          </div>
        </div>
      </div>
      <div className="container mt-3 border border-dark border-2 p-4">
        <div className="row">
          <div className="col-2">Name</div>
          <div className="col-2">Shipment ID</div>
          <div className="col-2">Order Date</div>
          <div className="col-2">Exp. Delivery Date</div>
          <div className="col-2">Status</div>
          <div className="col-2">Visual</div>
        </div>
        <hr className="border border-dark border-2 mt-3" />
        {Array.map((ele, index) => (
          <div>
            <div className="row" key={index}>
              <div className="col-2">{ele.name}</div>
              <div className="col-2">{ele.id}</div>
              <div className="col-2">{ele.orderDate}</div>
              <div className="col-2">{ele.expDeliveryDate}</div>
              <div className="col-2">{ele.status}</div>
              <div className="col-2 map-box"></div>
            </div>
            <hr className="border border-dark border-2 mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
}
