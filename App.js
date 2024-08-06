// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Layouts/Header';
import About from './Components/About'; // Create About component
import Contact from './Components/Contact'; // Create Contact component
import Skills from './Components/Skills';
import Footer from './Layouts/Footer';
import Education from './Components/Education';
import Internships from './Components/Internships';
import Projects from './Components/Project';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/education' element={<Education/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/internships' element={<Internships/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
