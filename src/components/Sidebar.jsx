import React, { useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';

import '../styles/Sidebar.css';

import { Link } from 'react-scroll';

//https://github.com/negomi/react-burger-menu/wiki/FAQ#i-want-to-control-the-open-state-programmatically-but-i-dont-understand-how-to-use-the-isopen-prop

export default function Sidebar() {
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
    <Menu>
      <Link
        activeClass='active'
        to='hero'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Accueil
      </Link>

      <Link
        activeClass='active'
        to='projets'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Mes projets
      </Link>

      <Link
        activeClass='active'
        to='nocode'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        #NoCode
      </Link>

      <Link
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
    </Menu>
  );
}
