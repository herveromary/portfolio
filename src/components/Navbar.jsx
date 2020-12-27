import React, { useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let x = ['navbar'];
  if (scrolled) {
    x.push('scrolled');
  }
  return (
    <header className={x.join(' ')}>
      <div className='logo'>
        <p>logo</p>
      </div>

      <div className='navbar'>
        <p className='navbar-item'>Accueil</p>
        <p className='navbar-item'>Projets</p>
        <p className='navbar-item'>NoCode</p>
        <p className='navbar-item'>Contact</p>
      </div>
    </header>
  );
};

export default Navbar;

// import React, { useEffect, useState } from 'react';

// import '../styles/Navbar.css';

// export default function Navbar() {
//   const [scrolled, setScrolled] = React.useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if (offset > 200) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//   });

//   let navbarClasses = ['navbar'];
//   if (scrolled) {
//     navbarClasses.push('scrolled');
//   }

//   return (

//   );
// }
