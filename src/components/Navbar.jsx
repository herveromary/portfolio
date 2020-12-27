import React, { useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
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
      <div className='navbar'>
        <a className='navbar-item-link' href='https://github.com/herveromary/'>
          <p className='navbar-item'>Accueil</p>
        </a>
        <p className='navbar-item'>Accueil</p>
        <p className='navbar-item'>Projets</p>
        <p className='navbar-item'>NoCode</p>
        <p className='navbar-item'>Contact</p>
      </div>
    </header>
  );
};

export default Navbar;
