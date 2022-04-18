import React, {useEffect} from 'react';
import './homescreen.css';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/logoblack.png';

const HomeScreen = () => {

  useEffect(() => {
     Aos.init();
  }, []);

  return (
    <div  className='main-homescreen'>
       <img data-aos='fade-up' data-aos-duration="1000" src={logo} alt="" className='logo'/>
      <div className="container-name">
        <h1 data-aos='fade-up' data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out" className='title-homescreen'>I am </h1>
        <Typewriter options={{
          autoStart: true, loop: true, delay: 150, strings: 'Johan Galeano'
        }}/>
        <p data-aos='fade' data-aos-delay="1000" data-aos-duration="2000" data-aos-easing="ease-in-out" className='text-homescreen'> I'm a Web Developer</p>

      </div>
      <div data-aos='fade-up' data-aos-duration="1000" className="decoration"></div>
      <div data-aos='fade-down' data-aos-duration="1000" className="decoration-2"></div>
      <div className="square-homescreen-1"></div>
      <div className="square-homescreen-2"></div>
      <div className="square-homescreen-3"></div>
      <div className="square-homescreen-4"></div>
      <div className="square-homescreen-5"></div>
      <div className="square-homescreen-6"></div>
      <div className="square-homescreen-7"></div>
      <div className="square-homescreen-8"></div>
      <div className="square-homescreen-9"></div>
      
    </div>
  )
}

export default HomeScreen