import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main.jsx'
import Collection from './Pages/Collection.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
    const [product, setProduct] = useState([])

  //make initial request to backend on first render
  useEffect(() =>{
    async function url() {
      const response = await fetch ("http://localhost:2020")
      const data = await response.json()
      console.log(data);
      setProduct(data)
    }
    url()
  }, [])

  return (
    <div className='App'>
       <Router>
        <Navbar />
        <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/collection" element={<Collection />} />
         <Route path="/contact" element={<Contact />} />
         {/* <Route path="/heels" element={<Collection category = 'heels'/>} /> */}
        {/*
        <Route path="/boots" element={<Collection category = 'boots />} />
        <Route path="/ballets" element={<Collection category = 'ballets />} />
          <Route path = ':productId' element = {<Collection />}
          </Route>
        <Route path="/about" element={<About />} />
      
        <Route path="/info" element={<Info />} />
        <Route path="/cart" element={<Cart />} />
           */}
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
