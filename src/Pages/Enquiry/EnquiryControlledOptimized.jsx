import React, { useState } from 'react'

function EnquiryControlledOptimized() {

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (nameError || emailError || messageError ||
      !enquiryFormData.name || !enquiryFormData.email || !enquiryFormData.message) {
      alert("Please correct all the errors before submitting.");
      return;
    }

    try {
           const response = await   fetch("https://jsonplaceholder.typicode.com/posts",{
              method:'POST',
              headers:{
                CLIENT_ID: "ABCD1234",
              },
              body: JSON.stringify(enquiryFormData),
             })
             const result = await response.json();
               console.log('Server Response:', result);
    } catch (error) {
           console.error('Submission failed:', error);
    }
    console.log("Submitted Data: ", enquiryFormData);
  }
  const userObjData = {
    name: "",
    email: "",
    message: "",
  }
  const [enquiryFormData, setEnquiryFormData] = useState(userObjData);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const nameChangeHandler = (e) => {
    const value = e.target.value;
    if (value.length <= 12) {
      setEnquiryFormData({ ...enquiryFormData, name: value });
      setNameError(false)
      console.log(e.target.value);
    } else {
      setNameError(true);
    }
  }

  const emailChangeHandler = (e) => {
    const value = e.target.value;

    setEnquiryFormData({ ...enquiryFormData, email: value });
    console.log(e.target.value);
    if (!isValidEmail(value)) {
      setEmailError(true)
    } else setEmailError(false)


  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }


  const messageChangeHandler = (e) => {
    const value = e.target.value;
    setEnquiryFormData({ ...enquiryFormData, message: value });
    console.log(e.target.value);
    if (!isValidMessage(value)) setMessageError(true)
    else setMessageError(false)
  }

  function isValidMessage(message) {
    if (message.length >= 10 && message.length <= 300) return true
    return false
  }
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'green' }}>Enquiry Form</h1>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor='name'>Name &nbsp;&nbsp;</label>
            <input
              value={enquiryFormData.name}
              onChange={nameChangeHandler}
              type='text'
              name='name'
              id='name'
            />
            {nameError && <span style={{ color: 'red' }}>Name must be 12 characters or less.</span>}
          </div>
          <br></br>
          <div>
            <label htmlFor='email'>Email &nbsp;&nbsp;</label>
            <input
              value={enquiryFormData.email}
              onChange={emailChangeHandler}
              type='email'
              name='email'
              id='email'
            />
            {emailError && (
              <span style={{ color: 'red' }}>Please enter a valid email address</span>
            )}
          </div><br></br>
          <div>
            <label htmlFor='message'>Message &nbsp;&nbsp;</label>
            <textarea
              value={enquiryFormData.message}
              onChange={messageChangeHandler}
              name="message"
              id="message" />
            {messageError && <span style={{ color: 'red' }}>Required, Min 10 and max 300 characters</span>}
          </div><br></br>
          <input type='submit' />
        </form>
      </div>
    </>
  )
}

export default EnquiryControlledOptimized