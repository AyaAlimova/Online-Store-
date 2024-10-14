import React from 'react'
import '../contact/contact.css'

const FormSection = () => {
  return (
    <div className="container">
    <div className='form-section'>
      <h3>Always ready to help</h3>
      <p>
      Call us at +7 (495) 000-00-00 <br /> 
      Write to us: info@mysite.ru <br />
      Or fill out the contact form, and we will get back to you as soon as possible
      </p>

      <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Phone" />
      <textarea placeholder="Leave a message..." />
      <button type="submit">Send</button>
    
      </form>
    </div>
    </div>
  )
}

export default FormSection