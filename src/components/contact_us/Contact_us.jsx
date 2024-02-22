import React from 'react'
import "./Contact_us.css";
import kweesha_home_logo from "../../images/kweesha_home_logo.svg";
import LeaveUs from '../LeaveUs/LeaveUs';
const Contact_us = () => {
  return (
    <>
    <div className='contact_us' id='contact_us_page'>
      <div className='container paddings_contus'>
        <h1 className='text-center testscol'>CONTACT US</h1>
        <div className='text-center'><img src={kweesha_home_logo} className='mt-2 ' alt='kweesha_icon'></img></div>
        <div className='row mt-4 p-5 ms-5'>
          <div className='col-lg-6'>
            {/* contact us */}
            <div className='row cc w-100 d-flex justify-content-end'>
              <div className='col-lg-2'>
                <div className='mt-5 f-cons'><i class="bi bi-envelope-fill sk"></i></div>
              </div>
              <div className='col-lg-10'>
                <p className='cont fs-5 mb-1 mt-1'>Contact Us</p>
                <p className='w-75 des mb-1'>Please feel free to drop us a line. We will respond as soon as possible.</p>
                <a href="#leavus" className='text-decoration-none text-dark'>
                <div className='d-flex'>
                  <h2 className='msg'>Leave a message </h2>
                  <i class="bi bi-arrow-right-circle ms-2"></i>
                </div>
                </a>
              </div>
            </div>

            {/* visit us */}
            <div className='row cc mt-4 w-100 d-flex justify-content-start'>
              <div className='col-lg-2 col-sm-2'>
                <div className='mt-5 f-cons'><i class="bi bi-geo-alt sk"></i></div>
              </div>
              <div className='col-lg-10 col-sm-10'>
                <p className='cont fs-5 mb-1 mt-1'>Visit us</p>

                <p className='des w-75 mb-1'>16 Navneet Vihar, Sector 9, Indira Nagar, Lucknow, Uttar Pradesh 226016</p>
                <a href="https://goo.gl/maps/bPyuUeMTL2Ry7BuB8" className='text-decoration-none text-dark'>
                <div className='d-flex'>
                  <h2 className='msg'>Get Direction </h2>
                  <i class="bi bi-arrow-right-circle  ms-2"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-sm-6'>
            {/* Map */}
            <div className="qq">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.6696269658123!2d81.0018623!3d26.882235599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a6bfffffff%3A0x884f6c4fa7ac8905!2sKweesha%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1696330399118!5m2!1sen!2sin%22"
                width="85%"
                height="320"
                style={{ marginTop: "-28px" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="maps img-thumbnail"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    <LeaveUs />
    </>
  )
}

export default Contact_us