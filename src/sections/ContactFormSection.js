import React, { useState } from "react";
import { submitData, validate } from '../assets/scripts/contactform_validation';

const ContactFormSection = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [failedsubmitted, setFailedSubmitted] = useState(false)

  const handleChange = (e) => {
    const {id, value} = e.target
    switch(id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comments':
        setComments(value)
        break
    }

    setErrors({...errors, [id]: validate(e)})
  }

  const handleSubmit =  async (e) => {
    e.preventDefault()
    setSubmitted(false)
    setFailedSubmitted(false)

    setErrors(validate(e, {name, email, comments}))
  
    if (errors.name === null && errors.email === null && errors.comments === null) {

        let json = JSON.stringify({name, email, comments})

        setName('')
        setEmail('')
        setComments('')
        setErrors({})

        if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )) {
            setSubmitted(true)
            setFailedSubmitted(false)
        }else {
            setSubmitted(false)
            setFailedSubmitted(true)
        }

      
    } else {
        setSubmitted(false)  
    }
  }

return (
    <section className="contact-form">
        <div className="container">
        {
          submitted ? (
          <div className="alert alert-success text-center mb-5" role="alert">
            <h3>Thank you for your comments</h3> 
            <p>We will contact you as soon as possible.</p>
            </div>  ) : (<></>)
        }
        {
          failedsubmitted ? (
          <div className="alert alert-danger text-center mb-5" role="alert">
            <h3>We could not send</h3> 
            <p>Please try again</p>
            </div>  ) : (<></>)
        }
                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} noValidate>
                <div>
                    <input id="name" type="text" className={(errors.name ? 'error': '')} placeholder="Your Name" value={name} onChange={handleChange}/>
                    <div className="errorMessage">{errors.name}</div>
                </div>
                <div>
                    <input id="email" type="email" className={(errors.email ? 'error': '')} placeholder="Your Mail" value={email} onChange={handleChange}/>
                    <div className="errorMessage">{errors.email}</div>
                </div>
                <div className="textarea">
                    <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {})} placeholder="Comments"  value={comments} onChange={handleChange}></textarea>
                    <div className="errorMessage">{errors.comments}</div>
                </div>
                <div className="btn-form">
                    <button type="submit" className="btn-theme">Post Comment</button>
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                </div>
                </form>
        </div>
    </section>
    )
}
export default ContactFormSection 
