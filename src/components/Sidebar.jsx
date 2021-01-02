import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

import '../styles/Sidebar.css';

import { Link } from 'react-scroll';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleStateChange = () => {
    setMenuOpen();
  };

  return (
    <Menu isOpen={menuOpen} onStateChange={() => handleStateChange()}>
      <Link
        onClick={() => closeMenu()}
        activeClass='active'
        to='hero'
        spy={true}
        smooth={true}
        offset={+40}
        duration={500}
      >
        <h2 className='burger-menu-item'>Accueil</h2>
        <p>Bienvenue sur mon portfolio</p>
      </Link>

      <Link
        onClick={() => closeMenu()}
        activeClass='active'
        to='projets'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <h2 className='burger-menu-item'>Mes projets</h2>
        <p>En React-Node.js</p>
      </Link>

      <Link
        onClick={() => closeMenu()}
        activeClass='active'
        to='nocode'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <h2 className='burger-menu-item'>#NoCode</h2>
        <p>Des projets sans code</p>
      </Link>

      <Link
        onClick={() => closeMenu()}
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <h2 className='burger-menu-item'>Contactez-moi</h2>
        <p>J'attends votre message :)</p>
      </Link>
    </Menu>
  );
}
