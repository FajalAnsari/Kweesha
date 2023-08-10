import React, { useEffect } from 'react'
import Kweesha_icon from '../../common/Kweesha_icon';
import { Link } from 'react-router-dom';
import "../About_us_page/About_data.css";

const Solutions_page = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='about_data p-5'>
        <div className='container'>
            <h1 className='text-center p-4 mt-5 testscol'>SOLUTIONS</h1>
          <Kweesha_icon />
      <h2 className='text-center read_title mt-5'>Unlocking Business Potential  </h2>
      <div className='justify-content-center'>
      <p className='read_desc mt-4  mx-auto'>
      Kweesha Solutions thrives on complexity. Our expert team of high IQ professionals is ready to delve into your business's operations, dissecting each element with an analytical lens. We unearth inefficiencies that often go unnoticed in day-to-day operations and design tailored strategies to rectify them. <br></br><br></br>

Our solutions are as diverse as your needs. From redefining operational workflows to enhancing financial analysis, we have the expertise to customize solutions for various sectors. We don't just help your business survive; we empower it to grow. <br></br><br></br>

By identifying and focusing on key growth factors, we help your business move beyond survival mode and towards a future of sustainable success.


      </p>
      </div>
      <Link to='/'><p className='about_button text-center text-white fw-bold mx-auto mt-5'><i class="bi bi-arrow-left-short arrow"></i></p></Link>        
        </div>
    </div>
  )
}

export default Solutions_page