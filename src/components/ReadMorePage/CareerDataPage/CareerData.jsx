import React, { useEffect } from 'react'
import KweeshaIcon from '../../common/KweeshaIcon';
import { Link } from 'react-router-dom';
import "../AboutUsPage/AboutData.css";


const CareerData = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
        // Function to show the modal
      const modalTriggerButton = document.querySelector('.ab');
      if (modalTriggerButton) {
        modalTriggerButton.click();
      }
       
  });
  
  return (
    <div className='about_data p-5'>
 <div className='container'>
  
 <h1 className='text-center p-4 mt-5 testscol'>CAREER</h1>
          <KweeshaIcon />
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
 
 {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-white d-none ab" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content" >  
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Important Update to Our Work Arrangements</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body contentModel">
       <p>
       <span className='fw-bold'>Important Update to Our Work Arrangements</span><br></br><br></br>
Dear Visitors,<br></br>
In light of recent regulatory changes by the Central Government concerning work-from-home opportunities and the frauds arising from it, we at <span className='fw-bold'>Kweesha solutions private limited</span> are making essential updates to our employment practices. <br></br><br></br>

<span className='fw-bold'>Please Note:</span> As of December 1st, 2023, we regret to inform you that work-from-home options are no longer available for any roles within our organization. <br></br><br></br>

This decision aligns with the latest guidelines and directives issued by the authorities.<br></br><br></br>

We understand that this change might impact those seeking remote work opportunities. We assure you that this decision was made with careful consideration and is in compliance with new regulations. Our priority remains to offer a supportive and compliant work environment for all our team members.<br></br><br></br>

For those interested in pursuing career opportunities with us, we encourage you to explore our current openings, which will now be based in-office. We are committed to providing a vibrant, dynamic, and collaborative workplace environment.<br></br><br></br>

Thank you for your understanding and continued interest in joining our team. Should you have any queries or require further clarification, please do not hesitate to contact our HR department.
       </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Okay</button>
        {/* <button type="button" class="btn btn-primary">Understood</button> */}
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal --> */}
    </div>
  )
}

export default CareerData