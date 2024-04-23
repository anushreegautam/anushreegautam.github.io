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
          <li>Working on building and managing development of a new microservice under Clinical Trial Management System(CTMS) Domain.</li>  
          <li><strong>Reviewed UX designs</strong> to ascertain their feasibility for implementation and suggested alternate UX design for requirements.</li>
          <li>Conducted discussion with the team and defineed <strong>REST API endpoints</strong>.</li>
        </ul>
        <br/>
        <div>
        <span className="entry-title">Software Engineering Associate</span>
        <span className="duration">August 2020 - April 2023</span>
        </div>
        <h5>Medidata, Dassault Systèmes</h5>
        <ul>
         <li>Worked on <strong>multiple microservices</strong> required for conducting clinical trials in the CTMS domain.</li>  
         <li>Improved user landing experience by <strong>reducing the page load time by 50%</strong>.</li>
         <li>Developed a new endpoint to substitute calling a paginated API call multiple times and delegated the task to the <strong>node BFF layer</strong>.</li>
         <li>Delivered production fixes for <strong>Rich text editor</strong> to provide <strong>backward compatibility.</strong></li>
         <li>Explored feasibility with various <strong>open source libraries</strong> and consolidated the learnings under <strong>POCs</strong></li>
         <li>Translated the Figma designs into efficient user interfaces and optimized the code base by creating reusable components using the <strong>Storybook tool.</strong></li>
        </ul>
      </div>
      </div>
    </section>
  )  
}

export default Experience