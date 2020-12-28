import React, { useEffect } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-scroll';

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
      <nav className='navbar' id='navbar'>
        <div className='navbar'>
          <ul className='nav-items'>
            <li className='nav-item'>
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
            </li>
            <li className='nav-item'>
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
            </li>
            <li className='nav-item'>
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
            </li>
            <li className='nav-item'>
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
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
