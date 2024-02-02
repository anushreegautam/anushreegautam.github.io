import React from 'react'
import Home from './tabs/Home'
import Experience from './tabs/Experience'
import Projects from './tabs/Projects'
import Education from './tabs/Education'
import Skills from './tabs/Skills'

const Content = () => {
  return (
    <div id="info-container" className="content">
      <Home/>  
      <Experience/>
      <Education/>
      <Skills/>
      <Projects />
    </div>
  ) 
}

export default Content