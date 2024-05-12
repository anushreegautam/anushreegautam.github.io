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
          <li>Acting <strong>frontend lead</strong> of a microservice which helps manage document reviews during clinical trials - ensuring process compliance, setting coding standards and collaborating with different stakeholders.</li>  
          <li>Introduced a new <strong>state management</strong> library <strong>Immerjs</strong> which <strong>reduced code duplication by 20%</strong> and enhanced <strong>code readability.</strong></li>
          <li>Developed a <strong>bash shell script</strong> to upload cypress test reports to <strong>JFrog Artifactory</strong> integrated it with <strong>Travis ci</strong> build.</li>
          <li>Integrated <strong>Biome</strong> in our project to replace <strong>Eslint</strong> and <strong>prettier</strong> which made the <strong>continuous integration</strong> process efficient by <strong>10%.</strong></li>
          <li>Migrated the project’s build and test jobs from <strong>Travis ci</strong> to <strong>Github actions.</strong></li>
        </ul>
        <br/>
        <div>
        <span className="entry-title">Software Engineering Associate</span>
        <span className="duration">August 2020 - April 2023</span>
        </div>
        <h5>Medidata, Dassault Systèmes</h5>
        <ul>
         <li>Worked on <strong>multiple microservices</strong> in the Clinical Trial Management System(CTMS) Domain used for configuring all aspects of clinical trials and for conducting clinical trials & creating and reviewing reports for them.</li>  
         <li>Integrated <strong>OpenTelemetry</strong> in <strong>Express Js</strong> server and created a detailed document to help other projects in the domain.</li>
         <li>Reduced the load time by <strong>50%</strong> for configuration management service <strong>home page</strong> by moving the <strong>user authentication</strong> to <strong>Express Js</strong> BFF layer.</li>
         <li>Investigated various <strong>open source libraries</strong> for <strong>rich text editors, analyzed</strong> their feasibility against project requirements under <strong>POC</strong> and <strong>defined schemas for rich text, tables, etc.</strong></li>
         <li>Developed <strong>REST APIs</strong> to develop <strong>bulk actions</strong> required for the configuration of clinical trials and delegated the task to the <strong>Express Js BFF</strong> layer.</li>
        </ul>
      </div>
      </div>
    </section>
  )  
}

export default Experience