import React from 'react';

import '../styles/Hero.css';

import maPhoto from '../assets/MaPhoto.png';
import MesTechnos from '../assets/MesTechnos.png';

export default function Hero() {
  return (
    <>
      <div className='hero-container'>
        <div className='hero-photo-container'>
          <img className='hero-photo' src={maPhoto} alt='Hervé Romary' />
        </div>

        <div className='hero-text-container'>
          <h1>Bonjour ! Vous cherchez un développeur web ?</h1>
          <h2>
            Je suis développeur fullstack React/Node.js à la recherche d'un
            stage
          </h2>
          <img className='hero-technos' src={MesTechnos} alt='Hervé Romary' />
        </div>
      </div>
    </>
  );
}
