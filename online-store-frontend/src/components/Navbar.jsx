import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from "phosphor-react"
import "./navbar.css"


function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to = "/">Main</Link>
        <Link to = "/collection">Collection</Link>
        <Link to= "/about">About us</Link>
        <Link to = "/contact">Contact</Link>
        <Link to = "/info">Useful Information</Link>
        <Link to = "/cart">
          <ShoppingCart size={40} />
        </Link>

      </div>
    </div>
  )
}

export default Navbar