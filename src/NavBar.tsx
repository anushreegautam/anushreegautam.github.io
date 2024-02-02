import React from 'react'

const NavBar = ({ className, handleClick }: { className: string, handleClick?: any }) => (
    <div className={className} >
      <a href="#about" onClick={handleClick} >About</a>
      <a href='#experience' onClick={handleClick} >Experience</a>
      <a href="#education" onClick={handleClick} >Education</a>
      <a href='#skills' onClick={handleClick} >Skills</a>
      <a href="#projects" onClick={handleClick} >Projects</a>
    </div> 
  )

export default NavBar  