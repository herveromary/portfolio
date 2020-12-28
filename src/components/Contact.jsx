import React from 'react';

import '../styles/Contact.css';
import photoCv from '../assets/photocv.jpg';
import telecharger from '../assets/telecharger.png';
import logoLinkedin from '../assets/logoLinkedin.png';
import logoGithub from '../assets/logoGithub.png';
import cv from '../assets/ROMARY-dev-React-CV.pdf';

export default function Contact() {
  return (
    <>
      <section id='contact'>
        <div className='contact-container'>
          <div className='contact-title'>
            <h2 className='titre'>Contactez-moi !</h2>
          </div>
          <div className='contact-options-container'>
            <div className='contact-details'>
              <div className='contact-numeros'>
                <p>06 42 51 22 74</p>
                <p>herve@romary.io</p>
              </div>
              <div className='contact-logos'>
                <a
                  href='https://www.linkedin.com/in/herveromary/'
                  target='blank'
                >
                  <img className='image-logo' src={logoLinkedin} alt='Mon CV' />
                </a>
              </div>
              <div className='contact-logos'>
                <a href='https://github.com/herveromary/' target='blank'>
                  <img className='image-logo' src={logoGithub} alt='Mon CV' />
                </a>
              </div>
            </div>
            <a className='contact-cv-download' href={cv} target='blank'>
              <div className='contact-cv-download'>
                <div className='container'>
                  <img className='image-cv' src={photoCv} alt='Mon CV' />
                  <img className='image-cv' src={photoCv} alt='Mon CV' />
                  <img className='image-cv' src={photoCv} alt='Mon CV' />
                  <img className='image-cv' src={photoCv} alt='Mon CV' />
                  <img className='image-cv' src={telecharger} alt='Mon CV' />
                </div>
              </div>
            </a>
            <div className='contact-cv-download-mobile'>
              <div className='container'>
                <a href='https://github.com/herveromary/' target='blank'>
                  <img className='image-cv' src={photoCv} alt='Mon CV' />
                  <p>Télécharger mon CV</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
