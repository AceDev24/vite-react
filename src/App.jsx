import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about';
import Skill from './components/Skill';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Entries from './components/Entries';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {

  return (
    <div>
      
      <Header />

      <Banner />

      <About />

      <Skill />

      <Certificates />

      <Projects />
    
      <Experiences />

      <Entries />

      <Footer />
    </div>
  )
}

export default App