import { useState } from 'react'
import './index.css'
import Hero from './pages/Hero'
import Experience from './pages/Exp'
import Education from './pages/Edu'
import Projects from './pages/project'
import Skills from './pages/skill'
import Contact from './pages/contact'

function App() {


  return (
    <>
      <Hero/>
      <Experience/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
      
    </>
  )
}

export default App
