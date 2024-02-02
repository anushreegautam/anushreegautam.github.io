import React from 'react'

const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <div>
      <h1>Experience</h1>
      <br/>
      <div>
        <div>
        <span className="entry-title">Software Engineering Specialist</span>
        <span className="duration">April 2023 - Present</span>
        </div>
        <h5>Medidata, Dassault Systèmes</h5>
        <ul>
          <li>Working on building and managing development of a microservice under Clinical Trial Management System Domain.</li>  
          <li>Responsible for developing new functionalities, dealing with frontend architecture related issues and maintaining code quality.</li>
        </ul>
        <br/>
        <div>
        <span className="entry-title">Software Engineering Associate</span>
        <span className="duration">August 2020 - April 2023</span>
        </div>
        <h5>Medidata, Dassault Systèmes</h5>
        <ul>
         <li>Worked on building a configuration management microservice for managing settings required for conducting clinical trials.</li>  
         <li>Delivered production fixes for Urgent software release.</li>
         <li>Conducted research to identify open-source libraries for integration into our applications.</li>
         <li>Translated the Figma designs into efficient user interfaces and optimized the code base by creating reusable components using the Storybook tool.</li>
        </ul>
      </div>
      </div>
    </section>
  )  
}

export default Experience