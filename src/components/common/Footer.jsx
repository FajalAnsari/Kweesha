import React from 'react';
import { Link } from 'react-router-dom';
import { footer_logo } from '../../images';
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
                    <img src={footer_logo} alt="kweesha_logo" className='w-75' />
                    <p className="text-dark text-decoration-none mt-4"><b>Head Office Address : </b><br />
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
                      <Link to="/careers" className="text-dark text-decoration-none p1">Careers</Link>
                    </p>
                    <p>
                      <Link to="/about" className="text-dark text-decoration-none p1">About Us</Link>
                    </p>
                    <p>
                      <Link to="/terms_condition" className="text-dark text-decoration-none p1">Terms Condition</Link>
                    </p>
                    
                    <p>
                      <Link to="/privacy_policy" className="text-dark text-decoration-none p1">Privacy Policy</Link>
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
                      <Link to="https://www.worldmodelhunt.com/" className="text-dark text-decoration-none p1">World Model Hunt</Link>
                    </p>
                    <p>
                      <Link to="https://wmhindia.com/" className="text-dark text-decoration-none p1">WMHindia</Link>
                    </p>
                    <p>
                      <Link to="https://difm.llc/" className="text-dark text-decoration-none p1">DIFM LLC</Link>
                    </p>
                    <p>
                      <Link to="https://laymanlitigation.com/" className="text-dark text-decoration-none p1">Layman litigation</Link>
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
                      <Link to="employwoman.com" className="text-dark text-decoration-none p1">Employee</Link>
                    </p>
                    <p>
                      <Link to="" className="text-dark text-decoration-none p1">Agreement </Link>
                    </p>
                    <p>
                      <Link to="" className="text-dark text-decoration-none p1">E-sign</Link>
                    </p>
                    <p>
                      <Link to="omfg.pro" className="text-dark text-decoration-none p1">Omfg</Link>
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
                    Copyright © <span className='text-success'>Kweesha Pvt. Ltd.</span> | Powered by <Link to="https://difm.llc/" className='text-success text-decoration-none'>Do iT For Me LCC</Link>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <p className='btn text-success btn-floating m-1 '>Follow:</p>

                  <Link
                    className="m-1 text-dark ms-2 icon"><i className="bi bi-instagram grow"></i></Link>

                  <Link
                    className="m-1 text-dark ms-3 icon"
                    
                  ><i className="bi bi-facebook icon"></i></Link>

                  <Link
                    className="m-1 text-dark ms-3 icon"
                    
                  ><i className="bi bi-twitter"></i></Link>
                  <Link
                    className="m-1 text-dark ms-3 icon"
                    
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
