import React from 'react';
import './App.css';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

// COMPONENTS
import BasicExample from './components/Navigation/index';
import Hero from './components/Header/index';
import Projects from './components/Project/index';
import Contact from './components/Contact/index';




function App() {
  return (
    <div>
     <BasicExample/>
     <Hero/>
     <Projects />
     <Contact />
     
    </div>
  )
 
}

export default App;
