import React from 'react';
import "./Leave_Us.css";
import kweesha_home_logo from "../../images/kweesha_home_logo.svg";

const Leave_us = () => {
  return (
    <>
    <div className="leave_us p-5">
      <h3 className='text-center p-4'>LEAVE US A MESSAGE!</h3>
      <div className='text-center'><img src={kweesha_home_logo} className='mb-5' alt='kweesha_icon'></img></div>
      <div className="container">
       <div className="shadow form-container forms-bg  mb-4 w-75 mx-auto p-5">

<form class="row g-3 me-4 mx-4 mt-1">
  <div class="col-md-6">
    <input
      type="text"
      placeholder="Full name *"
      class="form-control inputs selct"
      id="inputEmail4"
    />
  </div>
  <div class="col-md-6">
    <input
      type="email"
      placeholder="Email Address *"
      class="form-control inputs selct"
      id="inputPassword4"
    />
  </div>
  <div class="col-md-6 mt-4">
    <input
      type="number"
      placeholder="Phone Number *"
      class="form-control inputs selct"
      id="inputPassword4"
    />
  </div>

  <div class="col-md-6 mt-4">
    <input
      type="text"
      placeholder="Subject *"
      class="form-control inputs selct"
      id="inputZip"
    />
  </div>

  <div class="col-md-12 mt-5">
              <textarea
                class="form-control inputs border-grays"
                placeholder="Your Message *"
                id="form6Example7"
                rows="4"
              ></textarea>
            </div>
  <div class="col-md-12 mt-5 ">
    <button
      type="submit"
      class=" mt-2 mb-5 signup w-25 btn-regi text-white fw-bolder"
    >
      Register Now
    </button>
  </div>
</form>
</div>
</div>
</div>
    </>
  )
}

export default Leave_us
