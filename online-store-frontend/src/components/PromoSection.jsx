import React, { useEffect, useState } from 'react'
import image from '../assets/header.webp'
import image1 from '../assets/header1.webp'
import image2 from '../assets/header2.webp'
import "./promoSection.css"
import  Collection  from '../Pages/Collection'
import { useNavigate } from 'react-router-dom'



const PromoSection = () => {
  const images = [image, image1, image2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate()

  const handleClick = ()=> {
    navigate ('/collection')
  }

  useEffect(() =>{
    const interval = setInterval(() =>{
      setCurrentImageIndex((prevIndex) => (prevIndex+1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])


  return (
    <div className='promoSectionStyle'>
      <img 
      src={images[currentImageIndex]}
      alt="Main Promo" 
      className='promoImageStyle' 
      />
      <div className='promoTextContainerStyle'>
        <h2>Buy More, Save More!</h2>
        <h3>20% Off Fall Favorites!</h3>
        <button className='buttonStyle' onClick={handleClick}>Shop now</button>
      </div>
    </div>
  );
};

export default PromoSection;
