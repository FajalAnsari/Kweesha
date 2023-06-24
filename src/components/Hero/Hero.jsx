import React from 'react'
import Leave_us from '../Contect_Us/Leave_us';
import "./Hero.css";

const Hero = () => {
  return (
    <>

      {/* <!-- Background image --> */}
      <div class="bg-image justify-content-center align-items-center Hero_Page d-flex flex-column">
        <h1 className='text-white'>Welcome to Kweesha Solutions <br />
          Pvt. Ltd</h1>
        <p className='fs-5 text-success'>Your partner for operational optimization and sustainable growth. Our analytical and innovative solutions drive efficiency and success across diverse industries.</p>
        <button className='btns text-white'>Get In Touch</button>
      </div>

      <Leave_us />
    </>
  )
}

export default Hero
