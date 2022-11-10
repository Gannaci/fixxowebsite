import React from 'react';
import FlashSaleLeft from "../component/FlashSaleLeft";
import { NavLink } from 'react-router-dom';



const FlashSaleSection = ({flashproducts}) => {
  return (
    <>
        <section className="flash-sale-menu-left container">
            <div className="flash-sale-box">
                <h1 className="flash-sale-title">2 FOR ONE $29</h1>
                <NavLink className="btn-theme btn-flash" to="/products">
                    <span className="corner-left left"></span>
                    FLASH SALE
                    <span className="corner-right right"></span>
                </NavLink>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-2">
              {
                flashproducts.map(flashproduct => <FlashSaleLeft key={flashproduct.id} flashproducts={flashproduct} />)
              }
            </div>
        </section>
    </>
  )
}

export default FlashSaleSection