import React from 'react'
import LeftImage from '../assets/images/showcase-left.svg'
import RightImage from '../assets/images/showcase-right.svg'

const Showcase = () => {
  return (
    <section className="__showcase">
        <div className="container-fluid">
            <img className="fr-1" src={LeftImage} alt=""/>
            <div className="fr-1" >mitten</div>
            <img className="fr-1" src={RightImage} alt=""/>
        </div>
    </section>
  )
}

export default Showcase