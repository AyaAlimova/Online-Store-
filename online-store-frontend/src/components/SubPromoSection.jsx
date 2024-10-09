import React from 'react'
import image from '../assets/subsection.webp'
import './subPromoSection.css'


function SubPromoSection() {
  return (
    <>
    <div className='sub-promo'>
       
        <div className="image-container">
          <h3 className='text-h3'>Find your perfect pair</h3>
          <img src={image} alt="Sub Promo" className='sub-promo-image'/>
          </div>
       
        <div className='form'>
          <p>Stay updated on discounts,</p>
          <p>promotions, and new arrivals</p>
          <input type="email" placeholder="Email" className='input-style' />
          <button className='submit-button'>Send</button>
        </div>
   </div>
    </>
  )
}




export default SubPromoSection