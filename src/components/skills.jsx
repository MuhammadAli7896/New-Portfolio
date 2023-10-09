import React from 'react';
import "../App.css";
import git from "../assets/git.png";
import react from "../assets/react.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import css from "../assets/css.png";
import nodejs from "../assets/nodejs.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import arrow from "../assets/arrow.png";
import sql from "../assets/sql.png";
import express from "../assets/express.png";

function Skills() {
    return (
        <section id="skills" style={{caretColor: "transparent"}}>
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Skill Set</h1>
            <div className="skills-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="skills-sub-title">Frontend Development</h2>
                        <div className="article-container">
                            <article>
                                <img
                                    src={html}
                                    alt="HTML icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={css}
                                    alt="CSS icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={js}
                                    alt="JavaScript icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={react}
                                    alt="React icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>React</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={bootstrap}
                                    alt="bootstrap icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Bootstrap</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={tailwind}
                                    alt="tailwind icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Tailwind</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="skills-sub-title">Backend Development</h2>
                        <div className="article-container">
                            <article>
                                <img
                                    src={sql}
                                    alt="SQL icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>SQL</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={nodejs}
                                    alt="Node.js icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Node JS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={express}
                                    alt="express icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Express JS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src={git}
                                    alt="git icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={arrow}
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => window.location.href = './#projects'}
            />
        </section>
    );
}

export default Skills;
