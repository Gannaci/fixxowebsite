import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';


const ShoppingcartView = () => {
  window.top.document.title ='Fixxo. | Cart '
  return (
    <>
    <MainMenuSection />
    <FooterSection/>
    </>
  )
}

export default ShoppingcartView