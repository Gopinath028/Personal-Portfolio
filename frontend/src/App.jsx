import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Project from './components/Project'
import Contact from './components/Contact'
import TechMarquee from "./components/TechMarquee";
import Skills from './components/Skills';


const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <TechMarquee />
      <Skills/>
      <Project/>
      <Contact/>
      </div>
  )
}

export default App