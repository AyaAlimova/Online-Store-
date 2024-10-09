import { TextAlignCenter } from 'phosphor-react'
import React from 'react'
import logo from '../assets/logo.webp'
import './header.css'


function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="Logo" className = 'logo' />
        <h1 className='title'>Fashion Point</h1>
    </header>
  )
}



export default Header