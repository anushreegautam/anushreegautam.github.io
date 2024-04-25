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
          <li>Acting <strong>frontend lead</strong> of a microservice - ensuring process compliance, setting coding standards and collaborating with different stakeholders.</li>  
          <li>Introduced a new <strong>state management</strong> library <strong>Immerjs</strong> which <strong>reduced code duplication by 10%</strong> and enhanced <strong>code readability.</strong></li>
          <li>Developed a <strong>bash shell script</strong> to upload cypress test reports to <strong>JFrog Artifactory</strong> integrated it with <strong>Travis build</strong></li>
        </ul>
        <br/>
        <div>
        <span className="entry-title">Software Engineering Associate</span>
        <span className="duration">August 2020 - April 2023</span>
        </div>
        <h5>Medidata, Dassault Systèmes</h5>
        <ul>
         <li>Worked on <strong>multiple microservices</strong> required for conducting clinical trials in the Clinical Trial Management System (CTMS) domain.</li>  
         <li>Improved user landing experience by moving user authentication to the ExpressJs BFF layer</li>
         <li>Developed a <strong>REST API</strong> to delegate a task of heavy data loading to the <strong>ExpressJs BFF layer</strong> and <strong>increased the efficiency by 30%</strong>.</li>
         <li>Delivered production fixes for <strong>Rich text editor</strong> to provide <strong>backward compatibility.</strong></li>
         <li>Investigated various <strong>open source libraries</strong> for <strong>rich text editors</strong>, analyzed their feasibility against project requirements and defined <strong>data structures</strong> for product use cases.</li>
         <li>Translated the Figma designs into efficient user interfaces and optimized the code base by creating reusable components using the <strong>Storybook tool.</strong></li>
        </ul>
      </div>
      </div>
    </section>
  )  
}

export default Experience