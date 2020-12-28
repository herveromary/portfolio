import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projets from './components/Projets';
import NoCode from './components/NoCode';
import Contact from './components/Contact';
import React, { useEffect } from 'react';

function App() {
  //const [scrolled, setScrolled] = React.useState(0);
  const [appClass, setAppClass] = React.useState('App');

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      //setScrolled(1);
      setAppClass('defil1');
    }
    if (offset > 700) {
      //setScrolled(2);
      setAppClass('defil2');
    }
    if (offset > 1800) {
      //setScrolled(2);
      setAppClass('defil3');
    }
    if (offset > 3000) {
      //setScrolled(2);
      setAppClass('defil4');
    }
  };

  //console.log(scrolled);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  // let x = ['App'];
  // if (scrolled === 1) {
  //   setAppClass('defil1');
  // }
  // if (scrolled === 2) {
  //   setAppClass('defil2');
  // }

  return (
    <div className={appClass}>
      <Navbar />
      <Hero />
      <Projets />
      <NoCode />
      <Contact />

      <header className='App-header'>
        <p>Réalisé avec React. Hébergé par Github et déployé par Heroku.</p>
      </header>
    </div>
  );
}

export default App;
