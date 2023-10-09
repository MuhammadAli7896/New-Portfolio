import React from 'react';
import "../App.css";
import profilePic from "../assets/profile-pic.jpg";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import PDF from "/Ali-Resume.pdf"

function Profile() {
    return (
        <section id="profile" style={{caretColor: "transparent"}}>
            <div className="section__pic-container">
                <img src={profilePic} alt="Muhammad Ali profile picture" className='pic-container'/>
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Muhammad Ali</h1>
                <p className="section__text__p2">Web Developer</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={() => window.open(PDF, '_blank')}
                    >
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
                        Contact Me
                    </button>
                </div>
                <div id="socials-container">
                    <a href="https://www.linkedin.com/in/muhammad-ali-a772a025b/" target="_blank">
                        <img
                            src={LinkedIn}
                            alt="My Github profile"
                            className="icon"
                        />
                    </a>
                    <a href="https://github.com/MuhammadAli7896" target="_blank">
                        <img
                            src={GitHub}
                            alt="My Github profile"
                            className="icon"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Profile;
