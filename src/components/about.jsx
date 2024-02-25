import React from 'react';
import "../App.css";
import profilePic from "../assets/profile-pic-2.jpg";
import Education from "../assets/education.png";
import Experience from "../assets/experience.png";
import Arrow from "../assets/arrow.png";

function About() {
    return (
        <section id="about" style={{caretColor: "transparent"}}>
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img
                        src={profilePic}
                        alt="Profile picture"
                        className="about-pic"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src={Experience}
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>Experience</h3>
                            <p>6+ Months <br />Web Development</p>
                        </div>
                        <div className="details-container">
                            <img
                                src={Education}
                                alt="Education icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>Bachelors in Computer Science<br/>2022-26 <br />4th Semester</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            I am presently in the process of honing my expertise in React.js, Node.js and Next.js, with a focused determination to excel in these technologies. My ultimate goal is to emerge as a proficient software engineer and full stack developer, equipped with a comprehensive understanding of both front-end and back-end intricacies. My unwavering dedication to continuous improvement drives my ambition to attain excellence in the fields of web development and software engineering. I am resolutely committed to embracing challenges, expanding my skill set, and contributing meaningfully to innovative projects within these domains.
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={Arrow}
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => window.location.href = './#experience'}
            />
        </section>
    );
}

export default About;
