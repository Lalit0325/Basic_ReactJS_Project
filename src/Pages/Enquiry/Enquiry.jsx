import React from 'react'

 const formSubmitController=(e)=>
    {
         e.preventDefault()
         console.log("Form submited");
         const enquiryData={
            name:e.target.name.value,
            email:e.target.email.value,
            message:e.target.message.value
         }

         console.log(enquiryData);
         
         
    }
function Enquiry() {
   
  return (
   <>
      <h1 style={{textAlign:"center"}}>Enquiry Form</h1 >
      <div style={{textAlign:"center",}}>
        <form onSubmit={formSubmitController}>
        <div>
            <label htmlFor="name">Name&nbsp;&nbsp;</label>
           <input
            type='text'
            name='name'
            id='name'
           />
        </div><br/>
        <div>
            <label htmlFor="email">Email&nbsp;&nbsp;</label>
           <input
            type='email'
            name='email'
            id='email'
           />
        </div><br/>
        <div>
            <label htmlFor="message">Mesage&nbsp;&nbsp;</label>
            <textarea id="message" name="message" rows="2" cols="20"/>
        </div><br/><br/>
        <input type='submit' />
      </form>
      </div>
   </>
  )
}

export default Enquiry