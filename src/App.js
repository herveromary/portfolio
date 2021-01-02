import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projets from './components/Projets';
import NoCode from './components/NoCode';
import Contact from './components/Contact';
import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';

function App() {
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={appClass}>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Navbar />
      <Hero />
      <Projets />
      <NoCode />
      <Contact />

      <header className='App-header'>
        <p>Réalisé avec React. Hébergé par Github et déployé par Netlify.</p>
      </header>
    </div>
  );
}

export default App;
