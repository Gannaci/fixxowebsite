import React from 'react'
import FlashSaleRight from "../component/FlashSaleRight";
import { NavLink } from 'react-router-dom';

const FlashSaleRightSection = ({ flashrightproducts }) => {
  return (
    <section className="flash-sale-menu-right container">
      <div className="row row-cols-1 row-cols-md-2">
              {
                flashrightproducts.map(flashrightproduct => <FlashSaleRight key={flashrightproduct.id} flashrightproducts={flashrightproduct} />)
              }
            </div>
        <div className="flash-sale-box">
            <h1 className="flash-sale-title">2 FOR ONE $49</h1>
            <NavLink className="btn-theme btn-flash" to="/products">
                    <span className="corner-left left"></span>
                    FLASH SALE
                    <span className="corner-right right"></span>
            </NavLink>
        </div>
    </section>
  )
}

export default FlashSaleRightSection