import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const FlashSaleRight = ({flashrightproducts}) => {

    return (
      <div className="col">
          <div className="card">
              <div className="card-img">
                  <img src={flashrightproducts.img} alt={flashrightproducts.name} />
                  <div className="card-menu d-xl-none">
                      <button className="menu-link">
                          <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className="menu-link">
                          <i className="fa-regular fa-repeat"></i>
                      </button>
                      <button className="menu-link">
                          <i className="fa-regular fa-bag-shopping"></i>
                      </button>
                  </div>
                  <NavLink to={`/flashrightproducts/${flashrightproducts.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none">
                      <span className="corner-left"></span>
                      <span className="corner-right"></span>
                      Quick View
                  </NavLink>
              </div>
              <div className="card-body">
                  <p className="card-category">{flashrightproducts.category}</p>
                  <h5 className="card-title">{flashrightproducts.name}</h5>
                  <p className="card-rating">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                  </p>
                  <p className="card-price">{flashrightproducts.price}</p>
              </div>
          </div>
      </div>
    )
  }
  
  export default FlashSaleRight