import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
  
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
