import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import MapSection from '../sections/MapSection';
import ContactFormSection from '../sections/ContactFormSection';



const ContactView = () => {
  window.top.document.title ='Fixxo. | Contact '
  return (
    <>
      <MainMenuSection/>
      <BreadcrumbSection currentPage="Contacts"/>
      <MapSection/>
      <ContactFormSection />
      <FooterSection/>
    </>
  )
}

export default ContactView