import React from 'react'
import { kweesha_solutions } from "../../images";
import "./Home.css";
import Kweesha_icon from '../common/Kweesha_icon';
import { Link } from 'react-router-dom';


const Solutions = () => {

  return (
    <>
 <div className='solutions'>

        <div className='main p-5 section' id='solution'>
            <div className='mt-5 mts'>
            <h1 className='text-center heading text-uppercase testscol'>SOLUTION</h1>
          <Kweesha_icon/>
            <div className='row mt-5'>
                <div className='col-lg-6 col-12 mobres'>
                 <img src={kweesha_solutions} className='img me-5' alt='home_page'></img>
                </div>
                <div className='col-lg-6 col-12 data'>
                  <h5 className='fs-4 title w-75 text-start'>Empowering Business Growth through Tailored Solutions</h5>
                  <p className='fs-6 mt-4 desc text-justify w-75 text-start justi'>Our solutions are as diverse as your needs. From redefining operational workflows to enhancing financial analysis, we have the expertise to customize solutions for various sectors. We don't just help your business survive; we empower it to grow.
                  <br /><br />
                   By identifying and focusing on key growth factors, we help your business move beyond survival mode and towards a future of sustainable success.</p>
                  <div className='border-0'>
                 <Link to="/solutions" className='text-decoration-none'><p className='btnss text-center text-white fw-bolder '>Learn more</p></Link>
                  </div>
                </div>
            </div>
            </div>
            </div> 

    </div>
    </>
  )
}

export default Solutions


