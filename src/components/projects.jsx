import React from 'react';
import "../App.css";
import mealGen from "../assets/Meal-Gen.jpeg";
import typingGame from "../assets/typing-game.jpeg";
import eTracker from "../assets/etracker.png";
import darkMode from "../assets/dark-mode.png";
import arrow from "../assets/arrow.png";
import chatting from "../assets/chatting.jpeg"
import prompt from "../assets/prompt.jpeg"

function Projects() {
    return (
        <section id="projects" style={{caretColor: "transparent"}}>
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers" id='projects-boxes'>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={chatting}
                                alt="Project 1"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Chatting Application</h2>
                        <p>A MERN stack-based chatting app, enhanced with Socket.IO, enables real-time communication and media sharing, offering a seamless user experience for staying connected effortlessly.</p>
                        <div className="btn-container">
                            <div>
                                <a href="https://chat-nest-zcoa.onrender.com/" target='_blank' >
                                    <button
                                        className="btn btn-color-2 project-btn"
                                    >
                                        Check it out
                                    </button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/MuhammadAli7896/Chatting-Web-Application" target='_blank' >
                                    <button
                                        className="btn btn-color-2 project-btn"
                                    >
                                        Check Code
                                    </button>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={prompt}
                                alt="Project 1"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Prompt Odyssey</h2>
                        <p>A Next.js based web application, enhanced with Tailwind CSS which offer users to create, edit and share AI chatbots prompts. It gives a smooth, responsive and seamless user experience to stay connected and work mutually.</p>
                        <div className="btn-container">
                            <div>
                                <a href="https://prompt-odyssey.onrender.com/" target='_blank' >
                                    <button
                                        className="btn btn-color-2 project-btn"
                                    >
                                        Check it out
                                    </button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/MuhammadAli7896/Prompt-Odyssey" target='_blank' >
                                    <button
                                        className="btn btn-color-2 project-btn"
                                    >
                                        Check Code
                                    </button>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={typingGame}
                                alt="Project 3"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Typing Game</h2>
                        <p>Immerse yourself in the ultimate typing challenge through my HTML, CSS, and JS project featuring an engaging typing game. Put your speed to the test as you type the displayed word within a limited timeframe, with local storage utilized for high-score tracking and seamless DOM manipulation enhancing the immersive gaming experience.</p>
                        <div className="btn-container">
                            <a href="https://github.com/MuhammadAli7896/HTML-CSS-JS-Projects/tree/main/Project_9%20(Expense%20Tracker)" target='_blank' >
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Check Code
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={mealGen}
                                alt="Project 3"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Meal Generator</h2>
                        <p>Check out this HTML, CSS, and JS project, offering a dynamic meal search experience. Harnessing the power of the Fetch API and promises, users can seamlessly search for their desired meal, triggering API calls to display mouthwatering images that cater to their gastronomic curiosity</p>
                        <div className="btn-container">
                            <div className="btn-container">
                                <a href="https://github.com/MuhammadAli7896/HTML-CSS-JS-Projects/tree/main/Project_8%20(Meal%20Generator)" target='_blank' >
                                    <button
                                        className="btn btn-color-2 project-btn"
                                    >
                                        Check Code
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={eTracker}
                                alt="Project 1"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Expense Tracker</h2>
                        <p>Track and manage your expenses seamlessly with my latest project created using HTML, CSS, and JavaScript. Experience a user-friendly expense tracking interface offering diverse options and operations, empowering you to take control of your financial journey.</p>
                        <div className="btn-container">
                            <a href="https://github.com/MuhammadAli7896/HTML-CSS-JS-Projects/tree/main/Project_9%20(Expense%20Tracker)" target='_blank' >
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Check Code
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={darkMode}
                                alt="Project 3"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Dark Mode and Custom Hook</h2>
                        <p>Unveil enhanced time navigation with my React project, powered by a custom hook that effortlessly unveils the previous and next days of the week. Elevating the user experience, the integration of an instant-rendering dark mode switcher, facilitated by the useTheme hook, brings seamless visual transformation to this dynamic application.</p>
                        <div className="btn-container">
                            <div className="btn-container">
                                <a href="https://github.com/MuhammadAli7896/HTML-CSS-JS-Projects/tree/main/Project_8%20(Meal%20Generator)" target='_blank' >
                                    <button
                                        className="btn btn-color-2 project-btn"
                                    >
                                        Check Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={arrow}
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => window.location.href = './#skills'}
            />
        </section>
    );
}

export default Projects;
