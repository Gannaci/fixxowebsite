import React, {useContext}  from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import ProductGridSection from '../sections/ProductGridSection';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import { ProductContext } from '../contexts/contexts';


const ProductsView = () => {
  const productContext = useContext(ProductContext)
  window.top.document.title ='Fixxo. | Products '
  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products" />
    <ProductGridSection title="Products" items={productContext.all} />
    <FooterSection/>
    </>
  )
}

export default ProductsView