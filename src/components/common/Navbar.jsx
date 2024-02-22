import React from "react";
import { NavLink } from "react-router-dom";
import "./common.css";

const Navbar = () => {
  return (
    <>
      <header className="p-2 fixed shadow">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white">
          <div className="container">
            <span className="navbar-brand">
              <NavLink to={"/"} activeClassName="active">
                <img
                  src="kweesha_logo.svg"
                  alt="kweesha_logo"
                  className="kweeshalogo w-75 navbar-brand"
                />
              </NavLink>
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-5 me-4"
                    activeClassName="active"
                    exact
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-5 me-4"
                    activeClassName="active"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-5 me-4"
                    activeClassName="active"
                    to="/solutions"
                  >
                    Solutions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-5 me-4"
                    activeClassName="active"
                    to="/careers"
                  >
                    Careers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fs-5"
                    activeClassName="active"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
