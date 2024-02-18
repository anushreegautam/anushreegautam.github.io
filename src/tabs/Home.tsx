import React from 'react'
import { LinkedIn, GitHub, Email } from '@mui/icons-material'
import Navigation from '../Navigation'

const Home = () => {
  return (
    <section id="about">
        <div className='main-background'/>
        <Navigation />  
        <div className="about-container" id="about-conatiner-id">
          <img className="profile-photo" id="profile-photo-id" alt="profile-picture" src="../profile.jpg" />  
          <div className="flex-container-column">
            <div>
              <span>HELLO EVERYBODY! I AM</span>  
              <h1>ANUSHREE GAUTAM</h1>
              <div>
                <Email fontSize="small" sx={{ color: "black" }} /><span className="email-address"> : anushreegautam320@gmail.com</span> 
              </div>
              <br/>
              <h3>SOFTWARE DEVELPOER</h3>
            </div>
            <p>Greetings! I am currently working as a software developer in <strong>Medidata, a brand within Dassault Systèmes</strong>. I graduated with a B.Tech in Metallurgical and Materials Engineering from <strong>Malaviya National Institute of Technology (NIT Jaipur)</strong> in 2020. I have hands-on experience with technologies like <strong>Javascript, ReactJS, Typescript, Express, Docker, Webpack, Vite</strong>. I enjoy translating creative ideas into innovative solutions, all while prioritizing the delivery of exceptional user experiences. If you're looking for a passionate software developer with a keen eye for detail and a drive for innovation, I'm excited to connect and explore the possibilities.</p>
            <br/>
            <div className="social-media-links">
              <a href="http://linkedin.com/in/anushree-gautam" target="_blank" ><LinkedIn className="icon-size" fontSize="large" /></a>
              <a href="https://github.com/anushreegautam" target="_blank" ><GitHub className="icon-size" fontSize="large" /></a>
            </div>
          </div>
        </div> 
    </section>
  )
}

export default Home