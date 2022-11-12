import React from 'react'
import { NavLink } from 'react-router-dom'

const Mainmenuicon = ({link, icon, quantity, hideOnMobile , hideOnTablet}) => {
  return (
    <NavLink className={`main-menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""} ${hideOnTablet ? "hidden" : ""}`} to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default Mainmenuicon