import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const Navbar = () => {
  return (
    <>
    
     <header className="p-2 fixed shadow">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white">
          <div className="container">
           
            <span className="navbar-brand">
            <img src="kweesha_logo.png" alt="kweesha_logo" className="kweeshalogo w-75 navbar-brand"/>
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active fs-5  me-4" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fs-5 me-4" to="">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fs-5 me-4" to="">
                    Solutions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fs-5 me-4" to="">
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  fs-5" to="">
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
