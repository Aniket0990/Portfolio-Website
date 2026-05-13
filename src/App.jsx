import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      
      {/* Scroll Top Button */}
      <a 
        href="#home" 
        aria-label="ScrollTop" 
        className={`fas fa-angle-up fixed right-[2rem] p-[1rem_1.5rem] text-[2rem] bg-[#ffae00] text-[#0d002c] rounded-full transition-all duration-[1s] ease-linear z-[1000] flex items-center justify-center no-underline ${showScroll ? 'top-[calc(100%-12rem)]' : 'top-[-140%]'}`}
      ></a>
    </div>
  );
}

export default App;
