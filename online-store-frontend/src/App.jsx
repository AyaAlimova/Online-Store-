import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
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
          <Route />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
