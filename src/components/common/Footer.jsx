import React from 'react';
import { Link } from 'react-router-dom';
import "./common.css";

const Footer = () => {
  return (
    <>

      <div className='footer_page'>
        <div className="container">
          <footer className="text-center text-lg-start text-dark  p-5" >
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <img src="kweesha_logo.png" alt="kweesha_logo" className='w-75' />
                    <p className="text-dark text-decoration-none mt-4">Head Office Address : <br />
                      6Navneet Vihar, Sector 9, Indira
                      <br />
                      Nagar, Lucknow, Uttar Pradesh
                      <br />
                      226021
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-4 col-xl-3 col-6 mx-auto s-1 mb-4">
                    <hr className="mb-2 mt-0 d-inline-block mx-auto footer_com" />
                    <h6 className="text-uppercase fw-bold text-success">Quick Link</h6>
                    <hr
                      className="mb-3 mt-1 d-inline-block mx-auto footer_com"
                    />
                    <p>
                      <Link to="/" className="text-dark text-decoration-none">Home</Link>
                    </p>
                    <p>
                      <Link to="/about" className="text-dark text-decoration-none">About</Link>
                    </p>
                    <p>
                      <Link to="/contect" className="text-dark text-decoration-none">Contact</Link>
                    </p>
                    <p>
                      <Link to="/career" className="text-dark text-decoration-none">Career</Link>
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 col-6 mx-auto mb-4 s-1">
                    <hr
                      className="mb-2 mt-0 d-inline-block mx-auto footer_com"
                    />
                    <h6 className="text-uppercase fw-bold text-success">DIFM Groups</h6>
                    <hr
                      className="mb-3 mt-1 d-inline-block mx-auto footer_com"
                    />
                    <p>
                      <Link to="https://www.worldmodelhunt.com/" className="text-dark text-decoration-none">World Model Hunt</Link>
                    </p>
                    <p>
                      <Link to="https://wmhindia.com/" className="text-dark text-decoration-none">WMHindia</Link>
                    </p>
                    <p>
                      <Link to="https://difm.llc/" className="text-dark text-decoration-none">DIFM LLC</Link>
                    </p>
                    <p>
                      <Link to="https://laymanlitigation.com/" className="text-dark text-decoration-none">Layman litigation</Link>
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 col-5 mx-auto mb-4 s-1">
                    <hr
                      className="mb-2 mt-0 d-inline-block mx-auto footer_com"
                    />
                    <h6 className="text-uppercase fw-bold text-success">Upcoming</h6>
                    <hr
                      className="mb-3 mt-1 d-inline-block mx-auto footer_com"
                    />
                    <p>
                      <Link to="employwoman.com" className="text-dark text-decoration-none">Employee</Link>
                    </p>
                    <p>
                      <Link to="" className="text-dark text-decoration-none">Agreement </Link>
                    </p>
                    <p>
                      <Link to="" className="text-dark text-decoration-none">E-sign</Link>
                    </p>
                    <p>
                      <Link to="omfg.pro" className="text-dark text-decoration-none">Omfg</Link>
                    </p>
                  </div>

                </div>
              </div>
            </section>
            <hr
              className="mb-1 mt-0 d-inline-block mx-auto footer_comm"
            />
            <section className="p-3 pt-0 mt-2 s-2">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3 ps-1">
                    Copyright © <span className='text-success'>Kweesha Pvt. Ltd.</span> | Powered by <span className='text-success'>Do iT For Me LCC</span>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <p className='btn text-success btn-floating m-1 '>Follow:</p>

                  <Link
                    className="btn  btn-floating m-1 text-dark"
                    role="button"
                  ><i className="bi bi-instagram"></i></Link>

                  <Link
                    className="btn btn-floating m-1 text-dark"
                    role="button"
                  ><i className="bi bi-facebook"></i></Link>

                  <Link
                    className="btn btn-floating m-1 text-dark"
                    role="button"
                  ><i className="bi bi-twitter"></i></Link>
                  <Link
                    className="btn  btn-floating m-1 text-dark"
                    role="button"
                  ><i className="bi bi-pinterest"></i></Link>
                </div>
              </div>
            </section>
            <hr
              className="mb-1 mt-0 d-inline-block mx-auto footer_comm"
            />
          </footer>
        </div>

      </div>
    </>
  )
}

export default Footer
