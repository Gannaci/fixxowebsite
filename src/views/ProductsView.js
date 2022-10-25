import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';


const ProductsView = () => {
  window.top.document.title ='Fixxo. | Products '
  return (
    <>
    <MainMenuSection />
    <FooterSection/>
    </>
  )
}

export default ProductsView