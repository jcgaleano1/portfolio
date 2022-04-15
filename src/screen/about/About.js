import React, { useEffect } from 'react';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className='about'>
      <div className="decoration-about"></div>
      <div className="decoration-about-1"></div>
      <div className="container-text-about">
        <h2 data-aos='fade' className='title-about'>ABOUT ME</h2>
        <p data-aos='fade-up' data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out" className='text-about'>Hello, my name is Johan Galeano. I'm from Colombia, Bogotá and I like to program.
          I consider myself as a realiable person, who is able to work as a team, It is easy for me to get along with others and I'm a quick learner who likes to learn everyday.
          Usually my activities are watch series, play videogames, ride on my bike or to go out with my motorbike and I'm passionate about watching tutorials.
          Talking about programming, I like overall the frontend part because I consider there are many awesome animations and colors.
          Acording with studies, I have finished a Technician in Software programing and I did some courses about Javasript, Html, Css and others. This has inspired me to continue this great carreer.
          Although I don't have real work experience, I have developed some projects and at the moment I would like to adquire more experience and to start in this wonderfull world, I know I have the skills to do it and I'll be willing to do my best all time </p>
      </div>
    </div>
  )
}

export default About