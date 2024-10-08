import React from 'react'
import mainPicture from '../assets/header.webp'



const PromoSection = () => {
  return (
    <div style={promoSectionStyle}>
      <img src={mainPicture} alt="Main Promo" style={promoImageStyle} />
      <div style={promoTextContainerStyle}>
        <h2>Fallsdfsffdsfsfdfs!</h2>
        <h3>Discount 20%</h3>
        <button style={buttonStyle}>To Store</button>
      </div>
    </div>
  );
};

const promoSectionStyle = {
  position: 'relative', // Allows absolute positioning of text inside
  width: '100%',
  height: '500px', // Adjust to your desired section height
};

const promoImageStyle = {
  // width: '100%',
  // height: '130%',
  objectFit: 'cover', // Ensures the image covers the entire section
};

const promoTextContainerStyle = {
  position: 'absolute',
  top: '60%',
  left: '15%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
  padding: '20px',
  maxWidth: '300px',
  textAlign: 'left',
  zIndex: 2, // Makes sure the text is above the image
};

const buttonStyle = {
  backgroundColor: '#fff',
  border: '1px solid #000',
  padding: '10px 20px',
  marginTop: '20px',
};

export default PromoSection;
