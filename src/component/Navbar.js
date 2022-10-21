import React from 'react'
import Logo from '../assets/images/Logo.svg'

const Navbar = () => {
  return (
    <nav className="__navbar">
        <div className="container">
            <img src={Logo} alt="Logo"/>
            <div>Links</div>
            <div>Social</div>
        </div>
    </nav>
  )
}

export default Navbar