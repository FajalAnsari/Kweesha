import React, { useEffect, useState } from 'react'
import "./Home.css";
import Contact_us from '../contact_us/Contact_us';
import About_us from './About_us';
import Solutions from './Solutions';
import Careers from './Careers';
import axios from 'axios';
import Holiday_Kweesha from "../../images/Kweesha_holiday_popup.png";
const Home = () => {
  useEffect(()=>{
    setIsModalOpen(true);
},[])
const [isModalOpen, setIsModalOpen] = useState(false);
const [showThankYouMessage, setShowThankYouMessage] = useState(false);
const [Name, setUserName] = useState("");
const [Email, setUserEmail] = useState("");
const [Mobile, setUserMobile] = useState("");
const [error, setUserError] = useState("");

const closeModal = () => {
  setIsModalOpen(false);
};
const handleSubmit = (e) => {
  e.preventDefault();
  if (Name === '' && Email === '' && Mobile === '') {
    setUserError('Please fill in the Deatils otherwise skip this notification!');
  } else {
    const data = { Name: Name, Email: Email, Mobile: Mobile };

    setIsModalOpen(false); // Close the initial modal
    axios.post(`https://script.google.com/macros/s/AKfycbxTs9tFGh1K4K4swjbeKkEyqfp51EyR4EtYeNKVPItThKW-CJ2yAhOMj2V7blvQedicMg/exec?Name=${Name}&Email=${Email}&Mobile=${Mobile}`).then((res)=>{
    }).catch((err)=>{
      alert(err);
    })

    // Show thank you message after a short delay
    setTimeout(() => {
      setShowThankYouMessage(true);
      // Hide thank you message after 3 seconds
      setTimeout(() => {
        setShowThankYouMessage(false);
      }, 3000);
    }, 500); // Adjust delay timing as needed
  }
};
   
  return (
    <>
     <About_us />
     <Solutions />
     <Careers />
    {/* contact us  */}
    <Contact_us />
     {/* model */}
            


     {isModalOpen && (
  <div className={isModalOpen ? "modal-container active modal d-block" : "modal-container modal d-block"}  tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content" style={{ marginTop: '10px', backgroundImage: `url(${Holiday_Kweesha})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

        <div className='row '>
          <div className='col-md-6 col-12 px-4 pt-3 pb-3 order-md-1 order-2'>
          <div className="modal-body holiday_model p-4  bg-white rounded-2
          
          " >
          <h2 className='fw-bold'>Happy Holiday</h2>
          <p className="text-black desc_holiday fw-normal " style={{color:'black'}}>Make your holidays even more magical! Subscribe to our email list and enjoy inspiring tales of the season along with special surprises.</p>
          <form className="mt-3 " style={{color:'black'}}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label aa">Name</label>
              <input type="text"  className="form-control bg-transparent text-white border-0 border-bottom border-success desc_holiday" name='Name' id="name" placeholder="Enter Your Name" onChange={(e) => {setUserName(e.target.value)}} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control bg-transparent text-white border-0 border-bottom border-success desc_holiday" id="email" name='Email' placeholder="Enter Your Email" onChange={(e) => {setUserEmail(e.target.value)}} />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">Mobile</label>
              <input type="tel" className="form-control bg-transparent text-white border-0 border-bottom border-success desc_holiday" id="number" name='Mobile' placeholder="Enter Your Mobile" onChange={(e) => {setUserMobile(e.target.value)}} />
            </div>
            {error && <div className="alert alert-success" role="alert">{error}</div>}
            <button type="submit" className="btn btn-success w-50 outline-none border-0 holiday_send" onClick={handleSubmit} style={{backgroundColor:'#4CAB65'}}>Send</button>
          </form>
        </div>
          </div>
          <div className='col-md-6 col-12 order-md-2 order-1'>
        <div className="modal-header border-0">
          <button type="button" className="btn-close btn-close-green" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
        </div>
</div>
        </div>

      </div>
    </div>
  </div>
)}

{/* Modal for thank you */}
{showThankYouMessage && (
  <div className="modal d-block" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content" style={{backgroundColor:'#34A853'}}>
        <div className="modal-body text-center">
          <h1 className="text-white p-2">Thank you for joining!</h1>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  )
}

export default Home


