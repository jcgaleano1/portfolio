import React, { useEffect } from 'react';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import profile from '../../assets/profile.jpg'

const About = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className='about'>
      <div className="decoration-about"></div>
      <div className="decoration-about-1"></div>
      <h2 data-aos='fade' className='title-about'>ABOUT ME</h2>
      <div className="container-about">
        <div className="container-text">
          <p data-aos='fade-up' data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-about'>Hello! My name is Johan Galeano. I'm from Colombia, Bogotá and I am in love with programming because I consider there are many ways to build awesome web pages with animations and colors. <br /><br />
            Previously I finished a Technician in Software programing and I did some courses on Javascript, Html, Css and others like Node, Mongo, MySql and a little bit of Java and Python. This has inspired me to continue this great career. I am currently studying a technology in analysis and development of information systems.  <br /> <br />
            Although I don't have real work experience, I have developed some projects and at the moment I would like to adquire more experience and start in this wonderfull world, I know I have the skills to do it and I'll be willing to do my best. </p>
        </div>
        <div className="container-img">
          <div data-aos='fade' data-aos-delay="1200" data-aos-duration="1200" data-aos-easing="ease-in-out" className="circle-container">
            <img src={profile} alt="" />

          </div>
        </div>

      </div>
    </div>
  )
}

export default About