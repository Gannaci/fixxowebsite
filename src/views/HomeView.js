import React, { useState } from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import SaleMenuSection from '../sections/SaleMenuSection';
import ProductGridSection from '../sections/ProductGridSection';
import TopSellerSection from '../sections/TopSellerSection';
import FooterSection from '../sections/FooterSection';
import FlashSaleSection from '../sections/FlashSaleSection';
import FlashSaleRightSection from '../sections/FlashSaleRightSection';
import BottomMenuSection from '../sections/BottomMenuSection';




const HomeView = () => {
  window.top.document.title ='Fixxo.'

  const [products, setProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"}
  ])

  const [flashproducts, setFlashProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 2, name: "Modern Black Blouse", category: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 3, name: "Modern Black Blouse", category: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 4, name: "Modern Black Blouse", category: "Category", price: "$29.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"}
  ])

  const [flashrightproducts, setFlashRightProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 2, name: "Modern Black Blouse", category: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 3, name: "Modern Black Blouse", category: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 4, name: "Modern Black Blouse", category: "Category", price: "$49.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"}
  ])
  
  return (
    <>
      <MainMenuSection />
      <SaleMenuSection />
      <ProductGridSection title="Featured Products" products={products} />
      <TopSellerSection />
      <FlashSaleSection flashproducts={flashproducts} />
      <FlashSaleRightSection flashrightproducts={flashrightproducts} />
      <BottomMenuSection />
      <FooterSection/>
    </>
  )
}

export default HomeView