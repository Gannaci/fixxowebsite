import React, { useState, useContext } from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import SaleMenuSection from '../sections/SaleMenuSection';
import ProductGridSection from '../sections/ProductGridSection';
import TopSellerSection from '../sections/TopSellerSection';
import FooterSection from '../sections/FooterSection';
import FlashSaleSection from '../sections/FlashSaleSection';
import FlashSaleRightSection from '../sections/FlashSaleRightSection';
import BottomMenuSection from '../sections/BottomMenuSection';
import { ProductContext } from '../contexts/contexts';




const HomeView = () => {
  const productContext = useContext(ProductContext)
  window.top.document.title ='Fixxo.'

  const [flashproducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 2, name: "Modern Black Blouse", category: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 3, name: "Modern Black Blouse", category: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 4, name: "Modern Black Blouse", category: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"}
  ])

  const [flashrightproducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 2, name: "Modern Black Blouse", category: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 3, name: "Modern Black Blouse", category: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 4, name: "Modern Black Blouse", category: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"}
  ])
  
  return (
    <>
      <MainMenuSection />
      <SaleMenuSection />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <TopSellerSection />
      <FlashSaleSection flashproducts={flashproducts} />
      <FlashSaleRightSection flashrightproducts={flashrightproducts} />
      <BottomMenuSection />
      <FooterSection/>
    </>
  )
}

export default HomeView