import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from "phosphor-react"
import "./navbar.css"


function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to = "/">Main</Link>
        <div className='dropdown'>
        <Link to = "/collection" className='dropdown-btn'>Collection</Link>
         <div className='dropdown-content'>
          <Link to = '/collection/heels'>Heels</Link>
          <Link to = '/collection/boots'>Boots</Link>
          <Link to = '/collection/ballets'>Ballets</Link>
         </div>
        </div>
        <Link to= "/about">About us</Link>
        <Link to = "/contact">Contact</Link>
        <Link to = "/info">Useful Information</Link>
        <div className='nav-login-cart'>
          <Link to ="/login"><button>Login</button></Link>
          <Link to = "/cart">
          <ShoppingCart size={40} />
          </Link>
          <div className="nav-cart-count">0</div>
        
        </div>

      </div>
    </div>
  )
}

export default Navbar