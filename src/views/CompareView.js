import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';


const CompareView = () => {
  window.top.document.title ='Fixxo. | Compare '
  return (
    <>
    <MainMenuSection />
    <FooterSection/>
    </>
  )
}

export default CompareView