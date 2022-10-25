import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';



const ContactView = () => {
  window.top.document.title ='Fixxo. | Contact '
  return (
    <>
      <MainMenuSection/>
      <FooterSection/>
    </>
  )
}

export default ContactView