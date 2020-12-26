import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projets from './components/Projets';
import NoCode from './components/NoCode';
import Contact from './components/Contact';

console.log('Mmmm elle est propre cette console ! Nothing to see here');
console.log(
  'Mais au cas où je vous remets mon Linkedin : https://www.linkedin.com/in/herveromary/'
);

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Projets />
      <NoCode />
      <Contact />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>En construction...</p>
        <a
          className='App-link'
          href='https://www.linkedin.com/in/herveromary/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkendIn
        </a>
      </header>
    </div>
  );
}

export default App;
