import React, { useState } from 'react';
import image from '../assets/subsection.webp';
import './subPromoSection.css';

function SubPromoSection() {
    const [email, setEmail] = useState(""); // Step 1: State for the input

    const handleChange = (e) => {
        setEmail(e.target.value); // Update the email state on input change
    };

    const handleSubmit = () => {
        console.log("Email sent:", email); // Your submission logic here
        
        // Clear the input field
        setEmail(""); // Clear input
    };

    return (
        <>
            <div className='sub-promo'>
                <div className="image-container">
                   
                    <img src={image} alt="Sub Promo" className='sub-promo-image'/>
                </div>

                <div className='form'>
                    <p>Stay updated on discounts,</p>
                    <p>promotions, and new arrivals</p>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className='input-style' 
                        value={email} // Bind the input value to the state
                        onChange={handleChange} // Handle input change
                    />
                    <button className='submit-button' onClick={handleSubmit}>Send</button> {/* Handle button click */}
                </div>
            </div>
        </>
    );
}

export default SubPromoSection;
