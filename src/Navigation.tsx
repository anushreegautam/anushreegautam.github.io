import React from 'react'
import { Nav} from 'react-bootstrap'
import { Download } from '@mui/icons-material' 

const Navigation = ({ className }: { className?: string}) => {
    const containerClass = className ? className : 'nav-container'
  return (
    <div className={`${containerClass}`} id="navigation-bar"> 
    <a href="anushree_gautam_resume.pdf" className="resume-label" download="anushree_gautam" >Resume <Download fontSize="small" /></a>
     <div className="navigation-bar">
    <Nav id="portfolio-nav-bar" defaultActiveKey="about" className="flex-row expand">
    <Nav.Link eventKey="home" href="#about">About</Nav.Link>
    <Nav.Link eventKey="experience" href='#experience'>Experience</Nav.Link>
    <Nav.Link eventKey="education" href="#education">Education</Nav.Link>
    <Nav.Link eventKey="skills" href='#skill'>Skills</Nav.Link>
    <Nav.Link eventKey="projects" href="#projects">Projects</Nav.Link>
    </Nav>
  </div>    
  </div>
  )  
}

export default Navigation