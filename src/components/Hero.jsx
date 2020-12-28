import React from 'react';
import { ScrollRotate } from 'react-scroll-rotate';

import '../styles/Hero.css';

import maPhoto from '../assets/MaPhoto.png';
import logoReact from '../assets/MesTechnos.png';
import toutesTechnos from '../assets/toutesTechnos.png';

export default function Hero() {
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // }, []);

  // const handleScroll = () => {

  // }

  return (
    <>
      <section id='hero'>
        <div className='hero-container'>
          <div className='hero-photo-container'>
            <img className='hero-photo' src={maPhoto} alt='Hervé Romary' />
          </div>

          <div className='hero-text-container'>
            <h1>Bonjour ! Vous cherchez un développeur web ?</h1>
            <h2>
              Je suis développeur fullstack React-Node.js à la recherche d'un
              stage
            </h2>
            <div className='hero-logos'>
              <ScrollRotate>
                <img
                  className='hero-logo-react'
                  src={logoReact}
                  alt='Les technologies que je maitrise : react et node js'
                />
              </ScrollRotate>
              <img
                className='hero-logos-technos'
                src={toutesTechnos}
                alt='Les technologies que je maitrise : react et node js'
              />
            </div>
            {/* <div className='hero-button-container'>
            <button className='button-main' onClick={() => handleClick()}>
              Contactez-moi
            </button>
            <button className='button-main' onClick={() => handleClick()}>
              Regardez mon travail
            </button>

            <button className='button-secondary' onClick={() => handleClick()}>
              Arrêter cette roue pour économiser de l'énergie !
            </button>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
