import React from 'react'
import "./Home.css";
import Contact_us from '../contact_us/Contact_us';
import About_us from './About_us';
import Solutions from './Solutions';
import Careers from './Careers';

const Home = () => {
   
  return (
    <>
     <About_us />
     <Solutions />
     <Careers />
    {/* contact us  */}
    <Contact_us />
    </>
  )
}

export default Home


