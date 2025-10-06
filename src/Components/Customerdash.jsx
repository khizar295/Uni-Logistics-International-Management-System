import React from "react";
import { Link } from "react-router-dom";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function Customerdash() {
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
      id: "GDG5615DF5",
      name: "Charlie Davis",
      orderDate: "2023-10-05",
      expDeliveryDate: "2023-10-09",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 mt-28">
      <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 shadow-md">
        <h2 className="text-xl font-semibold tracking-wide">Customer Dashboard</h2>
        <Link
          to="/landingpage"
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white font-medium transition"
        >
          Logout
        </Link>
      </nav>

      <div className="dash-nav flex flex-wrap justify-center gap-6 bg-gray-800 text-white py-4">
        <Link to="/dashboard" className="hover:text-gray-300 font-semibold transition">
          Home
        </Link>
        <Link to="/newship" className="hover:text-gray-300 font-semibold transition">
          Ship
        </Link>
        <Link to="/trackpage" className="hover:text-gray-300 font-semibold transition">
          Track
        </Link>
        <Link to="/profile" className="hover:text-gray-300 font-semibold transition">
          My Profile
        </Link>
      </div>

      <div className="px-10 mt-8 mb-4">
        <p className="text-gray-800 font-bold text-lg">Welcome Back, Customer 👋</p>
        <p className="text-gray-700 font-medium mt-1">My Shipments</p>
      </div>

      <div className="flex justify-between items-center px-10 text-sm font-medium text-gray-700">
        <p>Displaying 1–5 of 5 results</p>
        <div className="flex items-center gap-2">
          <MdSkipPrevious className="cust-icon bg-gray-700" />
          <GrFormPrevious className="cust-icon bg-gray-700" />
          <span className="px-2">1</span>
          <GrFormNext className="cust-icon bg-gray-700" />
          <MdSkipNext className="cust-icon bg-gray-700" />
        </div>
      </div>

      <div className="bg-white mx-10 my-5 rounded-2xl shadow-md overflow-x-auto border border-gray-300">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-900 font-semibold">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Shipment ID</th>
              <th className="p-4">Order Date</th>
              <th className="p-4">Exp. Delivery Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Visual</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 border-t border-gray-300 text-gray-800"
              >
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.orderDate}</td>
                <td className="p-4">{item.expDeliveryDate}</td>
                <td
                  className={`p-4 font-semibold ${
                    item.status === "Delivered"
                      ? "text-green-600"
                      : item.status === "Pending"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                >
                  {item.status}
                </td>
                <td className="p-4">
                  <div className="map-box bg-gray-800 rounded-md"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
