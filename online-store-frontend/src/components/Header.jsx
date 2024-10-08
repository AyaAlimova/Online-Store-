import { TextAlignCenter } from 'phosphor-react'
import React from 'react'
import logo from '../assets/logo.webp'


function Header() {
  return (
    <header style={headerStyle}>
        <img src={logo} alt="Logo" style = {logoStyle} />
        <h1 style={titleStyle}>Fashion Point</h1>
    </header>
  )
};

const headerStyle = {
  textAlign: 'center',
  marginTop: '80px'
}

const logoStyle = {
  width: '50px'
}

const titleStyle = {
  fontSize: '2rem',
  letterSpacing: '2px',
  fontWeight: 'bold'
}

export default Header