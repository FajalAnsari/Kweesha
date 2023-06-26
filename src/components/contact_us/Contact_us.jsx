import React from 'react'
import "./Contact_us.css";
import kweesha_home_logo from "../../images/kweesha_home_logo.svg";
const Contact_us = () => {
  return (
    <div className='contact_us' id='contact_us_page'>
    <div className='container paddings_contus'>
        <h1 className='text-center'>CONTACT US</h1>
        <div className='text-center'><img src={kweesha_home_logo} className='mt-2 ' alt='kweesha_icon'></img></div>
        <div className='row mt-4 p-5 ms-5'>
            <div className='col-lg-6'>
                {/* contact us */}
               <div className='row cc w-100 d-flex justify-content-end'>
                <div className='col-lg-2'>
               <div className='mt-5 f-cons'> <i class="bi bi-envelope-fill sk"></i></div>
                </div>
                <div className='col-lg-10'>
                    <p className='cont fs-5 mb-1 mt-1'>Contact Us</p>
                    <p className='w-75 des mb-1'>Please feel free to drop us a line. We will respond as soon as possible.</p>
                    <div className='d-flex'>
                    <h2 className='msg'>Leave a message </h2>
                    <i class="bi bi-arrow-right-circle ms-2"></i>
                    </div>
                </div>
               </div>

               {/* visit us */}
               <div className='row cc mt-4 w-100 d-flex justify-content-start'>
                <div className='col-lg-2 col-sm-2'>
                <div className='mt-5 f-cons'><i class="bi bi-geo-alt sk"></i></div>
                </div>
                <div className='col-lg-10 col-sm-10'>
                    <p className='cont fs-5 mb-1 mt-1'>Visit us</p>

                    <p className='des w-75 mb-1'>16Navneet Vihar, Sector 9, Indira Nagar, Lucknow, Uttar Pradesh 226021</p>
                    <div className='d-flex'>
                    <h2 className='msg'>Get Direction </h2>
                    <i class="bi bi-arrow-right-circle  ms-2"></i>
                    </div>
                </div>
               </div>
            </div>
            <div className='col-lg-6 col-sm-6'>
                    {/* Map */}
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1.771070944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a66677f%3A0x8f85bd068d1afb8a!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1684734636299!5m2!1sen!2sin"
        width="85%"
        height="320"
        style={{marginTop:"-28px"}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="rounded-[20px]  sm:h-[500px] -mt-4 w-[320px]  -ml-10 sm:ml-0 sm:w-full maps"
      ></iframe>
    </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact_us