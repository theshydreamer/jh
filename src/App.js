import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
     <Home/>
     <About/>
     <Projects/>
     <Skills/>
    </div>
  );
}

export default App;
