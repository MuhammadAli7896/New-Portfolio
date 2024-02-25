import React from 'react';
import "../App.css";

function Footer() {
    return (
        <footer style={{caretColor: "transparent"}}>
            <nav>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
            </nav>
            <p>Copyright &#169; 2023-24 Muhammad Ali. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
