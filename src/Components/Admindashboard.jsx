import React from "react";
import { Link } from "react-router-dom";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Admindashboard() {
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
      id: "GDG5615DF6",
      name: "Charlie Davis",
      orderDate: "2023-10-05",
      expDeliveryDate: "2023-10-09",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans mt-28">
      <nav className="bg-gray-700 py-4 px-6 flex justify-between items-center">
        <h2 className="text-white text-2xl font-semibold">Admin Dashboard</h2>
        <Link
          to="/landingpage"
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-lg font-semibold transition"
        >
          Logout
        </Link>
      </nav>

      <div className="bg-gray-800 text-white py-3 flex justify-center gap-6 flex-wrap">
        <Link
          to="/admindashboard"
          className="hover:bg-gray-700 bg-gray-900 px-6 py-2 rounded-md font-medium transition"
        >
          Dashboard
        </Link>
        <Link
          to="/adminnewship"
          className="hover:bg-gray-700 bg-gray-900 px-6 py-2 rounded-md font-medium transition"
        >
          Ship
        </Link>
        <Link
          to="/trackpage"
          className="hover:bg-gray-700 bg-gray-900 px-6 py-2 rounded-md font-medium transition"
        >
          Track
        </Link>
        <Link
          to="/profile"
          className="hover:bg-gray-700 bg-gray-900 px-6 py-2 rounded-md font-medium transition"
        >
          My Profile
        </Link>
      </div>

      <div className="px-6 mt-6">
        <p className="font-bold text-gray-800">Welcome Back, Admin</p>
        <p className="font-bold text-gray-700 text-sm">Shipments Dashboard</p>
      </div>

      <div className="flex justify-between items-center px-6 mt-4">
        <small className="font-semibold text-gray-700">
          Displaying 1-5 of 5 results
        </small>
        <div className="flex items-center gap-2 text-gray-700 text-lg">
          <MdSkipPrevious className="bg-gray-300 rounded cursor-pointer p-1 text-2xl" />
          <GrFormPrevious className="bg-gray-300 rounded cursor-pointer p-1 text-2xl" />
          <small>1</small>
          <GrFormNext className="bg-gray-300 rounded cursor-pointer p-1 text-2xl" />
          <MdSkipNext className="bg-gray-300 rounded cursor-pointer p-1 text-2xl" />
        </div>
      </div>

      <div className="container mx-auto mt-6 bg-white shadow-lg border border-gray-300 rounded-lg p-6">
        <div className="grid grid-cols-6 font-bold border-b-2 border-gray-400 pb-3 text-gray-800 text-center">
          <div>Name</div>
          <div>Shipment ID</div>
          <div>Order Date</div>
          <div>Exp. Delivery</div>
          <div>Status</div>
          <div>Visual</div>
        </div>

        {shipments.map((ele, i) => (
          <div key={i} className="border-b border-gray-300 py-4 grid grid-cols-6 text-center items-center text-gray-700">
            <div>{ele.name}</div>
            <div>{ele.id}</div>
            <div>{ele.orderDate}</div>
            <div>{ele.expDeliveryDate}</div>
            <div
              className={`font-semibold ${
                ele.status === "Delivered"
                  ? "text-green-600"
                  : ele.status === "Pending"
                  ? "text-yellow-500"
                  : "text-blue-500"
              }`}
            >
              {ele.status}
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
