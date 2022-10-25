import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';


const NotFoundView = () => {
  window.top.document.title ='Fixxo. | Not Found '
  return (
    <>
    <MainMenuSection />
    <div className="container d-flex justify-content-center aligin-items-center" style={ { height: "500px" } }>
      <h1>404 - Page Not Found</h1>
    </div>
    <div style={{ position: "fixed" , bottom : "0"}}>
      <FooterSection/>
    </div>
    </>
  )
}

export default NotFoundView