import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
    const [showmediaicon,setshowmediaicon] = useState(false)
    return (
        <nav className='main-nav'>
            <div className='logo'>
                <h2>
                    <span>P</span>ort
                    <span>F</span>olio.
                </h2>
            </div>

            <div className={showmediaicon ? 'menu-links mobile-menu-links': 'menu-links'}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to='/about'>About</Link>
                    </li>

                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>

                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className='social-media'>
                <ul className='social-media-desktop'>
                    <li>
                        <a target="_blank" rel="noreferrer" href='http://www.linkedin.com/in/ce-anuz-5a8564ab/' className='facebook' ><FaFacebookSquare/></a>
                    </li>

                    <li>
                        <a target="_blank" rel='noreferrer' href='http://www.linkedin.com/in/ce-anuz-5a8564ab/' className='linkedin'><FaLinkedin/></a>
                    </li>

                    <li>
                        <a target="_blank" rel='noreferrer' href='http://github.com/mhanuz' className='github'><FaGithubSquare></FaGithubSquare></a>
                    </li>
                </ul>
                <div className='hamburger-menu'>
                            <a href='#' onClick={()=> setshowmediaicon ( !showmediaicon) }>
                                <GiHamburgerMenu/>
                            </a>
                        </div>
            </div>
        </nav>
    );
};

export default Navbar;