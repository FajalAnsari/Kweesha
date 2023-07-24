import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";

const Navbar = () => {

  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   const navItems = document.querySelectorAll(".nav-link");
  //   navItems.forEach(function (ele) {
  //     ele.addEventListener("click", function (event) {
  //       event.preventDefault();
  //       navItems.forEach(function (ele) {
  //         ele.classList.remove("active");
  //       });
  //       this.classList.add("active");
  //     });
  //   });
  // }, []);

  
  
  return (
    <>
      <header className="p-2 fixed shadow">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white">
          <div className="container">
            <span className="navbar-brand">
             <Link to={"/"}><img
                src="kweesha_logo.png"
                alt="kweesha_logo"
                className="kweeshalogo w-75 navbar-brand"
              /></Link> 
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
                  <a
                    className="nav-link active fs-5 me-4"
                    aria-current="page"
                    href="/#home"
                    
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-5 me-4"
                    href="/#box1"
                    
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-5 me-4"
                   href="/#box2"
                  
                  >
                    Solutions
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-5 me-4"
                    href="/#box3"
                    
                  >
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-5"
                    href="/#contact_us_page"
                   
                  >
                    Contact Us
                  </a>
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