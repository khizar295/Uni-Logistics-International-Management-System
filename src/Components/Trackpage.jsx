import React from 'react'
import { Link } from 'react-router-dom'

export default function Trackpage() {
  return (
    <div>
      <div className="land-in1 text-center bg-dark">
        <input
          type="text"
          placeholder="Enter your reference number"
          className="bg-light"
        />
        <button className="btn btn-light py-3 px-5">
          <Link
            to="/trackorderpage"
            className="text-decoration-none text-dark fw-bold"
          >
            Track
          </Link>
        </button>
      </div>
    </div>
  )
}
