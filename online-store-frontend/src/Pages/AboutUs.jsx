import React from 'react'
import logous from '../assets/logo-about.webp'
import './Css/aboutUs.css'
import Header from '../components/Header'

function AboutUs() {


  return (
    <>
    <Header />
      <div class="about-section">
  <div class="text-container">
    <h1>About Us</h1>
    <p>We are a pair of sellers passionate about our work. We'll help you find an amazing pair of shoes from the best designers' collections.</p>
    <p class="extra-text">This is the 'About Us' section. It's the perfect place to tell your story and explain what you do. If you own a business, write about how it all started, how the idea came to you, and what it led to. People will be interested to see the real you, so don't be afraid to share genuine experiences from your life.</p>
  </div>
  <div class="image-container">
    <img src={logous} alt="About Us Image" />
  </div>
</div>
</>
    
  )
}

export default AboutUs