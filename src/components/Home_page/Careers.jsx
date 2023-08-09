import React from 'react'
import { kweesha_careers } from "../../images";
import "./Home.css";
import Kweesha_icon from '../common/Kweesha_icon';
import { Link } from 'react-router-dom';


const Careers = () => {
 
   
  return (
    <>
 <div>

        <div className='main p-5 section' id='career'>
            <div className='mt-5 mts'>
            <h1 className='text-center heading text-uppercase testscol'>CAREERS</h1>
          <Kweesha_icon/>
            <div className='row mt-5'>
                <div className='col-lg-6 col-12 mobres'>
                 <img src={kweesha_careers} className='img me-5' alt='home_page'></img>
                </div>
                <div className='col-lg-6 col-12 data'>
                  <h5 className='fs-4 title careers-w text-start'>Join the Kweesha Solutions Team: Exciting Career Opportunities in Problem-Solving and Sustainability</h5>
                  <p className='fs-6 mt-4 desc text-justify w-75 text-start justi'>At Kweesha Solutions, we're always on the lookout for talented individuals who share our passion for problem-solving and sustainability. We offer a myriad of career opportunities,
                  <br /><br />
                 spanning finance, technology, science, and psychology. Our stimulating work environment fosters creativity, innovation, and professional growth.
                 </p>
                  <div className='border-0'>
                 <Link to="/careers" className='text-decoration-none'><p className='btnss text-center text-white fw-bolder '>Learn more</p></Link>
                  </div>
                </div>
            </div>
            </div>
            </div> 

    </div>
    </>
  )
}

export default Careers


