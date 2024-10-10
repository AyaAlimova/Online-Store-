import React from 'react'
import Header from '../components/Header'
import PromoSection from '../components/PromoSection'
import SubPromoSection from '../components/SubPromoSection'
import ProductSection from '../components/ProductSection'

function Main() {
  return (
    <div className='main'>
    <Header />
    <PromoSection />
    <SubPromoSection />
    <ProductSection />
    </div>
  )
}

export default Main