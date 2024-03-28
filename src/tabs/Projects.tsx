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
            <li>This application is developed using ReactJS and Unsplash API</li>
          </ul>
          <br/>
          <div className="flex-container-row">
            <span className="entry-title">TODO&nbsp;</span><a href="https://github.com/anushreegautam/mern_todo_app" target="_blank"><Launch color="disabled" fontSize="medium"/></a>
          </div>
          <br/>
          <div className="todo-app-gif" >
          <img src="../todo-app.gif" alt="todo-app-gif"  />
          </div>
          <br/>
          <ul>
            <li>TODO is a responsive single page application which allow user to create an account, add, update, reorder and delete tasks.</li>
            <li>The application is built using MERN stack, webpack, babel and json web tokens are used for user authentication and password reset.</li>
          </ul>
        </div>
      </div>
    </section>
  )  
}

export default Projects