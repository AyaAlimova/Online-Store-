import React from 'react'
import ContactSection from '../components/contact/ContactSection'
import ImageSection from '../components/contact/ImageSaction'
import FormSection from '../components/contact/FormSection'
import Header from '../components/Header'

function Contact() {
  return (
    <div>
      < Header />
      <ContactSection />
      <ImageSection />
      <FormSection />
    </div>
  )
}

export default Contact