import React from 'react'
import '../contact/contact.css'

function ContactSection () {

  return(
    <div className="container">
       <div className="contact-section">
        <div className="contact-info">
          <h2>We look forward to your visit</h2>
          <p>8700 W Reserve ave, Chicago IL</p>
          <p><strong>Mon–Fri:</strong> 9:00—7:00</p>
          <p>Call us: +1 (773) 000-00-00</p>
        </div>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=some_embed_code"
        width="430"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy">
      </iframe>
    </div>
  </div>
</div>
  
)}

export default ContactSection