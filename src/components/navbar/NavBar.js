import React from 'react'
import './navbar.css';
import {Link} from 'react-scroll';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul className='container-navbar'>
        <li><Link to="home" spy={true} smooth={true} offset={50} duration={700} >Home</Link> </li>
        <li><Link to="about" spy={true} smooth={true} offset={50} duration={700} >About Me</Link> </li>
        <li><Link to="projects" spy={true} smooth={true} offset={50} duration={700} >Projects</Link> </li>
        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={700}>Contact</Link> </li>
        <div className="square-navbar"></div>
      </ul>
    </div>
  )
}

export default NavBar