import React, { useEffect } from 'react'
import Kweesha_icon from '../common/Kweesha_icon';
import "./Pivacy_policy.css";

const Privacy_policy = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='privacy_data p-5'>
       <div className='container p-5 mb-4'>
       <h1 className='text-center p-4  mt-5 testscol'>Privacy Policy</h1>
          <Kweesha_icon />
        <h5 className='mt-5'>Privacy Policy:</h5>
        <p className='w-75 mx-auto'>At Kweesha Solutions, we take your privacy seriously. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By using our website and services, you consent to the terms of this Privacy Policy.
        </p>
        <h5>Information Collection and Use:</h5>
        <p className='w-75 mx-auto'>We may collect personal information such as your name, email address, and phone number when you submit a query or job application. We use this information solely for the purpose of responding to your queries and processing job applications.</p>
        <h5>Information Sharing:</h5>
        <p className='w-75 mx-auto'>We do not sell, rent, or disclose your personal information to third parties, except as required by law or in response to legal requests. We may share your information with our affiliates or service providers who assist us in delivering our services.
        </p>
        <h5>Data Security:</h5>
        <p className='w-75 mx-auto'>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or electronic storage is 100% secure.
        </p>
        <h5>Changes to this Policy:</h5>
        <p className='w-75 mx-auto'>We reserve the right to modify this Privacy Policy at any time. We will notify you of any significant changes by posting a notice on our website or sending you an email.
       </p>
        </div>
    </div>
  )
}

export default Privacy_policy
