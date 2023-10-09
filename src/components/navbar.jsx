import React, { useEffect, useState } from 'react';
import "../App.css";
import logo from "../assets/logo.png";

function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div style={{ caretColor: "transparent"}}>
            <nav id="desktop-nav" >
                <div className="logo" style={{ display: "flex", alignItems: "center" }}>Muhammad <div style={{ marginLeft: "10px" }}><img src={logo} alt="" height="50px" /></div></div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about" >About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        {/* <li><a href="#contact">Contact</a></li> */}
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo" style={{ display: "flex", alignItems: "center" }}>Muhammad <div><img src={logo} alt="" height="50px" /></div></div>
                <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
                    <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        {/* <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;
