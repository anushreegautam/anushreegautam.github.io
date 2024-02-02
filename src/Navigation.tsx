import React, { useState } from 'react'
import { Download, MoreVert } from '@mui/icons-material' 
import NavBar from './NavBar'

const Navigation = ({ className }: { className?: string}) => {
  const containerClass = className ? className : 'nav-container'
  const [showDropdown, setShowDropdown] = useState(false)

  const handleClick = () => setShowDropdown(prevState => !prevState)

  return (
    <div className={`${containerClass}`} id="navigation-container"> 
    <div className="navigation-bar">
      <div className="resume-label">
        <a href="anushree_gautam_resume.pdf"  download="anushree_gautam" >Resume <Download className="download-icon" fontSize="small" /></a>
      </div>  
      <a className="section-menu" onClick={handleClick} ><MoreVert fontSize="small" /></a>
      <NavBar className="navigation-bar-row-menu" />
    </div> 
    { showDropdown && <NavBar className="navigation-bar-column-menu" handleClick={handleClick} /> }  
  </div>
  )  
}

export default Navigation