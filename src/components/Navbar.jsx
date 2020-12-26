import React from 'react';

import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <p className='navbar-item'>Accueil</p>
      <p className='navbar-item'>Projets</p>
      <p className='navbar-item'>NoCode</p>
      <p className='navbar-item'>Contact</p>
    </div>
  );
}
