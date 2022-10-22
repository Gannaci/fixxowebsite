import React from 'react';
import { NavLink } from 'react-router-dom';
import Mainmenuicon from '../component/Mainmenuicon';


const MainMenuSection = () => {
  return (
        <nav className="main-menu container">
            <NavLink className="logo-type" to="/" end>Fixxo.</NavLink>
            <div className="main-menu-links">
                <NavLink className="main-menu-link" to="/" end>Home</NavLink>
                <NavLink className="main-menu-link" to="/categories" end>Categories</NavLink>
                <NavLink className="main-menu-link" to="/products" end>Products</NavLink>
                <NavLink className="main-menu-link" to="/contacts" end >Contacts</NavLink>
            </div>
            <div className="main-menu-icons">
                <Mainmenuicon link="/search" icon="fa-regular fa-magnifying-glass"/>
                <Mainmenuicon link="/compare" icon="fa-regular fa-repeat"/>
                <Mainmenuicon quantity={3} link="/wishlist" icon="fa-regular fa-heart"/>
                <Mainmenuicon quantity={5} link="/shoppingcart" icon="fa-regular fa-bag-shopping"/>
            </div>
        </nav>
  )
}

export default MainMenuSection