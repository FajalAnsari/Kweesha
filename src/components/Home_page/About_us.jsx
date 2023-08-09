import React from 'react'
import { kweesha_about } from "../../images";
import "./Home.css";
import Kweesha_icon from '../common/Kweesha_icon';
import { Link } from 'react-router-dom';


const About_us = () => {


  return (
    <>


      <div className='main p-5 section' id='about_us'>
        <div className='mt-5 mts'>
          <h1 className='text-center heading text-uppercase testscol'>About Us</h1>
          <Kweesha_icon />
          <div className='row mt-5'>
            <div className='col-lg-6 col-12'>
              <img src={kweesha_about} className='img me-5' alt='home_page'></img>
            </div>
            <div className='col-lg-6 col-12 data'>
              <h5 className='fs-4 title w-75 text-start '>A Think Tank for Problem-Solving, Diversity, and Sustainability in Business</h5>
              <p className='fs-6 mt-4 desc text-justify w-75 text-start justi'>Founded by Sitanshu Srivastava in 2023, Kweesha Solutions is a think tank serving businesses of all sizes and sectors. Our diverse operations, including Kweesha Capital, Cosmetics, and Consulting, prioritize problem-solving, diversity, and sustainability.
                <br /><br />
                We analyze, solve, and innovate using finance, technology, science, and psychology for operational efficiency, financial robustness, and sustainable growth.</p>
              <div className='border-0'>
                <Link to="/about" className='text-decoration-none'><p className='btnss text-center text-white fw-bolder '>Learn more</p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About_us;


