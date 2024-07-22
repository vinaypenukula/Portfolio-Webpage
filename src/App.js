
import './App.css';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Project from './components/projects/project';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
