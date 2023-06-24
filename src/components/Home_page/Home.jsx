import React from 'react'
import { homepage } from '../../Load_data/data'
import "./Home.css";
import kweesha_home_logo from "../../images/kweesha_home_logo.svg";
import Contact_us from '../contact_us/Contact_us';
import { Link } from 'react-router-dom';
const Home = () => {
   
  return (
    <>
 <div>
  
    {
        homepage.map((data)=>
        <div className='main p-5' id='box'>
            <div key={data.id} >
            <h2 className='text-center fw-bold mt-4 heading text-uppercase'>{data.heading}</h2>
            <div className='text-center'><img src={kweesha_home_logo} className='mt-2 ' alt='kweesha_icon'></img></div>
            <div className='row mt-4'>
                <div className='col-lg-6 col-12'>
                 <img src={data.image} className='img me-2' alt='home_page'></img>
                </div>
                <div className='col-lg-6 col-12 data'>
                  <h5 className='fs-4 title w-75 text-start'>{data.title}</h5>
                  <p className='fs-6 mt-4 desc text-justify w-75 text-start'>{data.description}</p>
                  <div className='float-start border-0'>
                  <Link to={`/read/${data.id}`}><button className='btn fs-6 learn_more'>Learn more</button></Link>
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


