import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
        <Routes>
        {/* <Route path="/" element={<Main />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/heels" element={<Heels />} />
        <Route path="/collection/boots" element={<Boots />} />
        <Route path="/collection/ballets" element={<Ballets />} />
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
