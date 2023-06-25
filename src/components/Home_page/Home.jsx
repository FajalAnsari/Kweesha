import React from 'react'
import { homepage } from '../../Load_data/data'
import "./Home.css";
import kweesha_home_logo from "../../images/kweesha_home_logo.svg";
import Contact_us from '../contact_us/Contact_us';
const Home = () => {
   
  return (
    <>
 <div>
  
    {
        homepage.map((data)=>
        <div className='main p-5' id='box'>
            <div key={data.id} >
            <h1 className='text-center heading text-uppercase'>{data.heading}</h1>
            <div className='text-center'><img src={kweesha_home_logo} className='mt-2 ' alt='kweesha_icon'></img></div>
            <div className='row mt-5'>
                <div className='col-lg-6 col-12 mobres'>
                 <img src={data.image} className='img me-5' alt='home_page'></img>
                </div>
                <div className='col-lg-6 col-12 data'>
                  <h5 className='fs-4 title w-75 text-start'>{data.title}</h5>
                  <p className='fs-6 mt-4 desc text-justify w-75 text-start'>{data.description} <br /><br/> {data.description2}</p>
                  <div className='border-0'>
                  <p className='btnss text-center text-white fw-bolder'>Learn more</p>
                  </div>
    
                </div>
            </div>
            </div>
            </div> 
        )
    }
     

    </div>
    {/* contact us  */}
    <Contact_us />
    </>
  )
}

export default Home


