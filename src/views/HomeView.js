import React, { useState } from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import ProductGridSection from '../sections/ProductGridSection';


const HomeView = () => {
  window.top.document.title ='Fixxo.'

  const [products, setProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9946135/pexels-photo-9946135.jpeg?cs=srgb&dl=pexels-grazyna-smit-9946135.jpg&fm=jpg"}
  ])
  
  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Featured Products" products={products} />
      <FooterSection/>
    </>
  )
}

export default HomeView