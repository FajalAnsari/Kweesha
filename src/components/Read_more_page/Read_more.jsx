import React from 'react'
import "./Read_more.css";

import kweesha_home_logo from "../../images/kweesha_home_logo.svg";
const Read_more = () => {
  return (
    <div className='read_more'>
        <div className='container'>
          <p className='fs-4 text-center'>About Us</p>
          <div className='text-center'><img src={kweesha_home_logo} className='mt-2 ' alt='kweesha_icon'></img></div>
          <h2 className='text-center read_title'></h2>
          <p className='read_desc'>

          </p>

        </div>
    </div>
  )
}

export default Read_more