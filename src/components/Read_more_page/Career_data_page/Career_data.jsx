import React, { useEffect } from 'react'
import Kweesha_icon from '../../common/Kweesha_icon';
import { Link } from 'react-router-dom';
import "../About_us_page/About_data.css";

const Career_data = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='about_data p-5'>
 <div className='container'>
 <h1 className='text-center p-4 mt-5 testscol'>CAREER</h1>
          <Kweesha_icon />
      <h2 className='text-center read_title mt-5'>Career Opportunities at Kweesha Solutions </h2>
      <div className='justify-content-center'>
      <p className='read_desc mt-4  mx-auto'>
      At Kweesha Solutions, we're always on the lookout for talented individuals who share our passion for problem-solving and sustainability. We offer a myriad of career opportunities, spanning finance, technology, science, and psychology. Our stimulating work environment fosters creativity, innovation, and professional growth.<br></br><br></br>

Our job listings cover a diverse range of roles designed to cater to varying skill sets. With us, you'll find opportunities to solve complex business problems, contribute to sustainability, and help businesses move from surviving to thriving. <br></br><br></br>

So, if you're smart, driven, and ready to make a difference, apply today and join our team.



      </p>
      </div>
      <div className="d-flex justify-content-center cars8">
      <Link to='/'><p className='about_buttons text-center text-white fw-bold mt-5'><i class="bi bi-arrow-left-short arrow"></i></p></Link>
      <Link to='/' className='text-decoration-none'><p className='about_buttonss text-center text-white fw-bold mt-5'>Apply Now</p></Link>
      </div>
 </div>
    </div>
  )
}

export default Career_data