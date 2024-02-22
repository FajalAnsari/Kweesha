import React, { useEffect } from 'react'
import KweeshaIcon from '../../common/KweeshaIcon'
import { Link } from 'react-router-dom';
import "./AboutData.css";
import LeaveUs from '../../LeaveUs/LeaveUs';



const AboutData = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  });
  
  return (
    <>
    <div className='about_data p-5'>
        <div className='container'>
        <h1 className='text-center p-4  mt-5 testscol'>ABOUT US</h1>
          <KweeshaIcon />
      <h2 className='text-center read_title mt-5'>Empowering Business Growth through Tailored Solutions</h2>
      <div className='justify-content-center'>
      <p className='read_desc mt-4  mx-auto'>
      Founded in 2023, Kweesha Solutions is Sitanshu Srivastava's brainchild. The concept? A think tank for businesses of all sizes and sectors. Over the years, we've expanded our operations, launching Kweesha Capital, Kweesha Cosmetics, and Kweesha Consulting, while there are more to come.<br></br><br></br>

At the heart of our diverse operations is a shared ethos: problem-solving, diversity, and sustainability. We approach each business challenge as an opportunity to demonstrate our unique ability to analyze, solve, and innovate. <br></br><br></br>

We harness our expertise in finance, technology, science, and psychology to devise solutions that promote operational efficiency, financial robustness, and sustainable growth.

      </p>
      </div>
      <Link to='/'><p className='about_button text-center text-white fw-bold mx-auto mt-5'><i class="bi bi-arrow-left-short arrow"></i></p></Link>
      </div>

    </div>
    <LeaveUs />
    </>
  )
}

export default AboutData