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
            <section className="footer_section">
              <div className="container text-center footerp text-md-start mt-5">
                <div className="row mt-3">
                  <div class="col-md-4 col-lg-3 col-xl-3 col-12 mx-auto mt-3">
                    <img src={footer_logo} alt="kweesha_logo" className='w-75' />
                    <p className="text-dark text-decoration-none mt-4 add"><b>Head Office Address </b><br />
                      16 Navneet Vihar, Sector 9, Indira
                      <br />
                      Nagar, Lucknow, Uttar Pradesh
                      <br />
                      226021
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-2 col-xl-2 col-6 mx-auto s-1 mb-4">
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

                  <div className="col-md-4 col-lg-2 col-xl-2 col-6 mx-auto mb-4 s-1">
                    <hr
                      className="mb-2 mt-0 d-inline-block mx-auto footer_com"
                    />
                    <h6 className="text-uppercase fw-bold text-success">Upcoming</h6>
                    <hr
                      className="mb-3 mt-1 d-inline-block mx-auto footer_com"
                    />
                    <p>
                      Employee Women
                    </p>
                    <p>
                   E-sign
                    </p>
                    <p>
                      Omfg
                    </p>
                  </div>

                  
                  <div className="col-md-12 col-lg-5 col-xl-5 col-12  mb-4 s-1">
                    <hr
                      className="mb-2 mt-0 d-inline-block mx-auto footer_com"
                    />
                    <h6 className="text-uppercase fw-bold text-success">Subscribe</h6>
                    <hr
                      className="mb-3 mt-1 d-inline-block mx-auto footer_com"
                    />
                    <div class="footer-text mb-25">
                                <p class="text-dark">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" class="text-white" placeholder="Email Address" />
                                    <button type="button">Subscribe</button>
                                </form>
                            </div>
                  </div>

                </div>
              </div>
            </section>
            <hr
              className="mb-1 mt-0 d-inline-block mx-auto footer_comm"
            />
            <section className="p-3 pt-0 mt-2 s-2">
              <div className="row d-flex align-items-center">
                <div className="col-md-5 col-lg-7  text-center text-md-start">
                  <div className="p-3 ps-1">
                    Copyright ©<span className='text-success'>2023-2024</span> | <Link to="/" className='text-success text-decoration-none'>Kweesha Pvt. Ltd.</Link>
                  </div>
                </div>

                <div className="col-md-7 col-lg-5 ml-lg-0  text-center text-md-end">
                  <p className='btn text-success btn-floating m-1 '>Follow:</p>

                  <Link
                    className="btn  btn-floating m-1 text-dark icon"
                    role="button"
                  ><i className="bi bi-instagram inst"></i></Link>

                  <Link
                    className="btn btn-floating m-1 text-dark icon"
                    role="button"
                  ><i className="bi bi-facebook facebook"></i></Link>

                  <Link
                    className="btn btn-floating m-1 text-dark icon"
                    role="button"
                  ><i className="bi bi-twitter twitter"></i></Link>
                  <Link
                    className="btn  btn-floating m-1 text-dark icon"
                    role="button"
                  ><i className="bi bi-linkedin linkdin"></i></Link>
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
