import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main.jsx'
import Collection from './Pages/Collection.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import { Password } from 'phosphor-react'


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
         <Route path="/collection" element={<Collection allProducts={product}/>} />
         <Route path="/collection/:category" element={<Collection allProducts={product} />} />
         <Route path="/contact" element={<Contact />} />
         <Route path ="/login" element={<LoginSignup />}/>
         <Route path='/product' element={<Product />}>
            <Route path = ":productId" element= {<Product />}/>
         </Route>
         <Route path="/cart" element={<Cart />} /> 
         {/* <Route path="/about" element={<About />} />
         <Route path="/info" element={<Info />} />
         */}
           
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
