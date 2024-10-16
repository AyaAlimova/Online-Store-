import React from 'react'
import './sidebar.css'
import {Link }from 'react-router-dom'
import {ShoppingCart} from "phosphor-react"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to = {'/addproduct'} style = {{textDecoration: "none"}}>
        <div className="sidebar-item">
          <ShoppingCart size={40} />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to = {'/listproduct'} style = {{textDecoration: "none"}}>
        <div className="sidebar-item">
          <button></button>
          <p>List of Product</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar