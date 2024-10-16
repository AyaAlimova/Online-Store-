import React from 'react';
import imgSec from '../../assets/contact.webp';
import '../contact/contact.css';

const ContactPage = () => {
    return (
        <div className="container">
            <div className="contact-section-container">
                <ContactSection />
                <ImageSection />
            </div>
            <FormSection />
        </div>
    );
};

const ContactSection = () => {
    return (
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
                    width="580"
                    height="300"
                    style={{ border: 1 }}
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
            </div>
        </div>
    );
};

const ImageSection = () => (
    <div className="image-section">
        <img src={imgSec} alt="Fall Trends" />
    </div>
);

const FormSection = () => {
    return (
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
    );
};

export default ContactPage;
