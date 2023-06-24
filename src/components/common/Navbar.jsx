import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const Navbar = () => {
  return (
    <>
    
     <header className="p-2  shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
           
            <Link className="navbar-brand ms-3 " to="/">
            <img src="kweesha_logo.png" alt="kweesha_logo" className="w-75"/>
            </Link>
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mt-4 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Pages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Contact Us
                  </Link>
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
