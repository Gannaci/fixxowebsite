import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = ({products}) => {

  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={products.img} alt={products.name} />
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
                <NavLink to={`/products/${products.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none" href="#">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    Quick View
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{products.category}</p>
                <h5 className="card-title">{products.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">{products.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard