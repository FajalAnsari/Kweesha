import React, { useState } from 'react';
import "./Leave_Us.css";
import { Link } from 'react-router-dom';
import kweesha_home_logo from "../../images/kweesha_home_logo.svg";

const Leave_us = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFullNameChange = (event) => {
    const { value } = event.target;

    if (!/^[a-zA-Z]{3,}$/.test(value)) {
      setFullNameError('Please enter a valid full name');
    } else {
      setFullNameError('');
    }

    setFullName(value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (!event.target.value) {
      setEmailError('Please enter your email address');
    } else if (!/\S+@\S+\.\S+/.test(event.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);

    if (!event.target.value) {
      setPhoneError('Please enter your phone number');
    } else if (!/^[0-9]{10}$/.test(event.target.value)) {
      setPhoneError('Please enter a valid phone number');
    } else {
      setPhoneError('');
    }
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);

    if (!event.target.value) {
      setSubjectError('Please enter a subject');
    } else {
      setSubjectError('');
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);

    if (!event.target.value) {
      setMessageError('Please enter your message');
    } else {
      setMessageError('');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();



//     //email send start
//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//       .then((result) => {
//         console.log(result.text);
//         console.log("email has been sent");
//       }, (error) => {
//         console.log(error.text);
//       });
// //email send end
  


    // Check if all required fields are filled out
    if (!fullName) {
      setFullNameError('Please enter your full name');
    }

    if (!email) {
      setEmailError('Please enter your email address');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
    }

    if (!phone) {
      setPhoneError('Please enter your phone number');
    } else if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError('Please enter a valid phone number');
    }

    if (!subject) {
      setSubjectError('Please enter a subject');
    }

    if (!message) {
      setMessageError('Please enter your message');
    }

    // If all fields are valid, submit the form and show a success message
    if (fullName && email && phone && subject && message) {
      setIsSubmitted(true);
      alert(`Dear ${fullName},\nThank you for your message. We appreciate your interest and will respond to your inquiry as soon as possible.`);
    }
  };

  return (
    <>
      <div className="leave_us p-5">
        <h1 className='text-center p-4 testscol'>LEAVE US A MESSAGE!</h1>
        <img src={kweesha_home_logo} className='mb-5 mx-auto d-block' alt='kweesha_icon'></img>
        <div className="container">
          <div className="shadow form-container forms-bg  mb-4 mx-auto p-5">
            <form class="row g-3 me-4 mx-4 mt-1" onSubmit={handleFormSubmit}>
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="Full name *"
                  class={`form-control inputs selct ${fullNameError ? 'is-invalid' : ''}`}
                  id="inputEmail4"
                  value={fullName}
                  onChange={handleFullNameChange}
                  onBlur={handleFullNameChange}
                  required
                />
                <div className="invalid-feedback">{fullNameError}</div>
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  placeholder="Email Address *"
                  class={`form-control inputs selct ${emailError ? 'is-invalid' : ''}`}
                  id="inputPassword4"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailChange}
                  required
                />
                <div className="invalid-feedback">{emailError}</div>
              </div>
              <div class="col-md-6 mt-4">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  class={`form-control inputs selct ${phoneError ? 'is-invalid' : ''}`}
                  id="inputPassword4"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={handlePhoneChange}
                  required
                />
                <div className="invalid-feedback">{phoneError}</div>
              </div>
              <div class="col-md-6 mt-4">
                <input
                  type="text"
                  placeholder="Subject *"
                  class={`form-control inputs selct ${subjectError ? 'is-invalid' : ''}`}
                  id="inputZip"
                  value={subject}
                  onChange={handleSubjectChange}
                  onBlur={handleSubjectChange}
                  required
                />
                <div className="invalid-feedback">{subjectError}</div>
              </div>
              <div class="col-md-12 mt-5">
                <textarea
                  class={`form-control inputs border-grays ${messageError ? 'is-invalid' : ''}`}
                  placeholder="Your Message *"
                  id="form6Example7"
                  rows="4"
                  value={message}
                  onChange={handleMessageChange}
                  onBlur={handleMessageChange}
                  required
                ></textarea>
                <div className="invalid-feedback">{messageError}</div>
              </div>
              <div class="col-md-12 mt-5 ">
                <button
                  type="submit"
                  class=" mt-2 mb-5 signup w-25 btn-regi text-center text-white fw-bolder"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leave_us;