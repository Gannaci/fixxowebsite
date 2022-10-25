import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Mainmenuicon from '../component/Mainmenuicon';


const MainMenuSection = () => {
const [showMenu, setShowMenu ] = useState(false)

const toggleMenu = () => {
    setShowMenu(!showMenu)
}

  return (
        <nav className="main-menu container">
            <NavLink className="logo-type" to="/" end>Fixxo.</NavLink>
            <div className={`main-menu-links ${ showMenu ? "d-grid" : "" }`}>
                <NavLink className="main-menu-link" to="/" end>Home</NavLink>
                <NavLink className="main-menu-link" to="/categories" end>Categories</NavLink>
                <NavLink className="main-menu-link" to="/products">Products</NavLink>
                <NavLink className="main-menu-link" to="/contacts" end >Contacts</NavLink>
            </div>
            <div className="main-menu-icons">
                <Mainmenuicon link="/search" icon="fa-regular fa-magnifying-glass"/>
                <Mainmenuicon hideOnMobile="true" link="/compare" icon="fa-regular fa-repeat"/>
                <Mainmenuicon hideOnMobile="true" quantity={3} link="/wishlist" icon="fa-regular fa-heart"/>
                <Mainmenuicon quantity={5} link="/shoppingcart" icon="fa-regular fa-bag-shopping"/>

                <button onClick={toggleMenu} className="d-xl-none main-menu-icon btn-main-icon"><i className="fa-regular fa-bars"></i></button>
            </div>
        </nav>
  )
}

export default MainMenuSection