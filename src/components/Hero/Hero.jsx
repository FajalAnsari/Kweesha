import React from 'react'
import Leave_us from '../Leave_Us/Leave_us';
import { Link } from 'react-router-dom';
import { kweesha_herologo } from '../../images';
import Home from "../Home_page/Home"
import "./Hero.css";

const Hero = () => {
  return (
    <>

      {/* <!-- Background image --> */}
      <div class="bg-image justify-content-center align-items-center Hero_Page d-flex flex-column">
        <img src={kweesha_herologo} alt="kweesha_herologo" className='kweesha1_herologo'/>
        <h1 className='text-white'>Welcome to Kweesha Solutions <br />
          Pvt. Ltd</h1>
        <p className='fs-5 text-success'>Your partner for operational optimization and sustainable growth. Our analytical and innovative solutions drive efficiency and success across diverse industries.</p>
        <Link to="" className='btns text-white text-center text-decoration-none'>Get In Touch</Link>
      </div>

     
      <Home />
      <Leave_us />
    </>
  )
}

export default Hero
