import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PromoSection from './components/PromoSection'
import SubPromoSection from './components/SubPromoSection'
import ProductSection from './components/ProductSection'

function App() {
  //make initial request to backend on first render
  useEffect(() =>{
    async function url() {
      const response = await fetch ("http://localhost:2020")
      const data = await response.json()
      console.log(data);
    }
    url()
  }, [])

  return (
    <div className='App'>
       <Router>
        <Navbar />
        <Header />
        <PromoSection />
        <SubPromoSection />
        <ProductSection />
        <Routes>
        {/* <Route path="/" element={<Main />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/heels" element={<Collection />} />
        <Route path="/collection/boots" element={<Collection />} />
        <Route path="/collection/ballets" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cart" element={<Cart />} />
           */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
