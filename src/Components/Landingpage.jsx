import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Landingpage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="landing-navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" className="logo-text">KCS (Khizar Courier Service)</Link>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
          </div>

          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/trackpage" onClick={() => setMenuOpen(false)}>
                Track Order
              </Link>
            </li>
            <li>
              <Link to="/landingpage" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
