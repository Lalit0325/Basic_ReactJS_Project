import React, { useState } from 'react'



function EnquiryControlled() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState(false);

    
        const nameChangeHandller = (e) => {

            console.log(e.target.value);
            if(e.target.value.length<=12)
            {
              setName(e.target.value);
              setNameError(false);
            }
            else{
                setNameError(true)
            }
            
        }


    const EmailChangeHandller = (e) => {
        setEmail(e.target.value)
        console.log("Email :: ", e.target.value);
    }
    const messageChangeHandler = (e) => {
        setMessage(e.target.value);
        console.log(e.target.value);

    }
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Enquiry Controlled Form</h1>
            <div>
                <form onSubmit={() => { }}>
                    <div>
                        <label htmlFor='name'>Name &nbsp;&nbsp;</label>
                        <input
                            onChange={nameChangeHandller}
                            value={name}
                            type='text'
                            name='name'
                            id='name' />
                    </div>
                    {nameError && (
            <span style={{ color: "red" }}>Name must contain max 12 chars</span>
          )}
                    <br />
                    <div>
                        <label htmlFor='email'>Email &nbsp;&nbsp;</label>
                        <input
                            value={email}
                            onChange={EmailChangeHandller}
                            type='email'
                            name='email'
                            id='email' />
                    </div><br />
                    <div>
                        <label htmlFor="message">Mesage&nbsp;&nbsp;</label>
                        <textarea
                            value={message}
                            onChange={messageChangeHandler}
                            id="message"
                            name="message" rows="2"
                            cols="20" />
                    </div><br /><br />
                    <input type='submit' />
                </form>
            </div>
        </>
    )
}

export default EnquiryControlled