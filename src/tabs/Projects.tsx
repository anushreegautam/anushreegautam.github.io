import React from 'react'
import { Launch } from '@mui/icons-material'

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <div>
      <h1>Projects</h1>
      <br/>
      <div>
      <div className="flex-container-row">
      <span className="entry-title">Photogram&nbsp;</span><a href="https://agautam-photogram.netlify.app/" target="_blank"><Launch color="disabled" fontSize="medium"/></a>
      </div>
      <ul>
        <li>Photogram is a responsive website inspired from Instagram, which has a user feed with an infinite scroll to view photos and the ability to view user profiles.</li>
        <li>The photos in the user profile can be viewed in grid and list views along with the functionality of lazy loading the photos in both views.</li>
        <li>This application is developed using ReactJS and Unsplash APi</li>
      </ul>
      </div>
      </div>
    </section>
  )  
}

export default Projects