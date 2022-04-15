import React, { useEffect } from 'react'
import './projects.css';
import { FaGithub, FaFirefox } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div className='projects'>
            <div className="decoration-projects"></div>
            <div className="decoration-projects-1"></div>
            <h2 data-aos='fade' className='title-projects'>PROJECTS</h2>

            <div data-aos='fade-left' data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out" className="cards">
                <div data-aos='fade-up' data-aos-delay="800" data-aos-duration="1200" data-aos-easing="ease-in-out" className="card">

                    <span></span><span></span><span></span><span></span>
                    <div className="content">
                        <h2>MovieMaker</h2>
                        <p>This project was made with React, React Router, Redux and consuming API, this app helps you to find a Movie and save favorites</p>
                        <div className="buttons-container">
                            <a href="#"><FaGithub /></a>
                            <a href="#"><FaFirefox /></a>

                        </div>
                    </div>

                </div>

                <div data-aos='fade-down' data-aos-delay="1000" data-aos-duration="1400" data-aos-easing="ease-in-out" className="card">

                    <span></span><span></span><span></span><span></span>
                    <div className="content">
                        <h2>MovieMaker</h2>
                        <p>This project was made with React, React Router, Redux and consuming API, this app helps you to find a Movie and save favorites</p>
                        <div className="buttons-container">
                            <a href="#"><FaGithub /></a>
                            <a href="#"><FaFirefox /></a>

                        </div>
                    </div>

                </div>
                <div data-aos='fade-up' data-aos-delay="1200" data-aos-duration="1600" data-aos-easing="ease-in-out" className="card">

                    <span></span><span></span><span></span><span></span>
                    <div className="content">
                        <h2>MovieMaker</h2>
                        <p>This project was made with React, React Router, Redux and consuming API, this app helps you to find a Movie and save favorites</p>
                        <div className="buttons-container">
                            <a href="https://github.com/jcgaleano1/api-movies"><FaGithub /></a>
                            <a href="https://jcgaleano1.github.io/api-movies/"><FaFirefox /></a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects