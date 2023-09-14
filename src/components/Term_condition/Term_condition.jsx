import React, { useEffect } from 'react'
import Kweesha_icon from '../common/Kweesha_icon';
import "../Privacy_policy/Pivacy_policy.css"

const Term_condition = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='privacy_data'>
       <div className='container p-5'>
       <h1 className='text-center p-4  mt-4 testscol'>Terms and Conditions</h1>
          <Kweesha_icon />
        <h5 className='mt-5'>Terms and Conditions:</h5>
        <p className='w-75 mx-auto'>Welcome to Kweesha Solutions. These Terms and Conditions govern the use of our website and services. By using our website and services, you agree to the terms of this agreement.
        </p>
        <h5>Intellectual Property:</h5>
        <p className='w-75 mx-auto'>All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Kweesha Solutions or its licensors and is protected by copyright, trademark, and other intellectual property laws.
        </p>
        <h5>Use of Website:</h5>
        <p className='w-75 mx-auto'>You may use our website for lawful purposes only. You agree not to use our website to engage in any activities that violate applicable laws or infringe on the rights of others.
        </p>
        <h5>Disclaimer of Warranties:</h5>
        <p className='w-75 mx-auto'>Our website and services are provided on the basis of without any warranties, express or implied. We do not guarantee the accuracy, completeness, or timeliness of the information on our website or the suitability of our services for your needs.
        </p>
        <h5>Limitation of Liability:</h5>
        <p className='w-75 mx-auto'>In no event shall Kweesha Solutions be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services.
       </p>
       <h5>Governing Law:</h5>
       <p className='w-75 mx-auto'>These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Kweesha Solutions operates.</p>
       <h5>Changes to this Agreement:</h5>
       <p className='w-75 mx-auto'>We reserve the right to modify this agreement at any time. We will notify you of any significant changes by posting a notice on our website or sending you an email.</p>
        </div>
    </div>
  )
}

export default Term_condition
