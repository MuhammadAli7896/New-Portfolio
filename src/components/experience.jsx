import React from 'react'
import "../App.css"
import Arrow from "../assets/arrow.png"

const Experience = () => {
    return (
        <section id='experience' style={{ caretColor: "transparent", position: "relative" }}>
            <div>
                <p className="section__text__p1">Take a look at my</p>
                <h1 className="title">Work Experience</h1>
            </div>
            <div className='experiences'>
                <div className='experience ex-1'>
                    <h2 className='experience-sub-title'>Sensor Dashboard design</h2>
                    <h3 className='experience-sub-title'><a href="https://nedncl.com/" target='_blank'>NCL-NED</a></h3>
                    <h3 className='experience-sub-title'>Sept 2023 - Oct 2023</h3>
                    <p className='experience-details'>During my internship, I had the opportunity to design and implement a Sensor Management System, which featured real-time sensor data visualization and tracking. For the dynamic frontend, I utilized React.js, while ensuring a secure backend through Node.js and Express.js. To efficiently store data, I employed a MySQL database and seamlessly integrated Arduino-based sensors into the system. The user experience was prioritized with a user-friendly interface designed using Bootstrap, and key features included real-time sensor data monitoring, a responsive UI design, and an intuitive dashboard for data analysis.</p>
                    <div className='experience-tags'><span>#React </span><span>#Node.js </span> <span>#Express</span> <span>#SQL</span></div>
                </div>
                {/* <div className='experience ex-2'><h2 className='experience-sub-title'>Sensor Dashboard design</h2>
                    <h3 className='experience-sub-title'><a href="https://nedncl.com/" target='_blank'>NCL-NED</a></h3>
                    <h3 className='experience-sub-title'>Sept 2023 - Oct 2023</h3>
                    <p className='experience-details'>During my internship, I had the opportunity to design and implement a Sensor Management System, which featured real-time sensor data visualization and tracking. For the dynamic frontend, I utilized React.js, while ensuring a secure backend through Node.js and Express.js. To efficiently store data, I employed a MySQL database and seamlessly integrated Arduino-based sensors into the system. The user experience was prioritized with a user-friendly interface designed using Bootstrap, and key features included real-time sensor data monitoring, a responsive UI design, and an intuitive dashboard for data analysis.</p>
                    <div className='experience-tags'><span>#React </span><span>#Node.js </span> <span>#Express</span> <span>#SQL</span></div>
                </div> */}
            </div>
            <div style={{ paddingTop: "30px" }}>
                <img
                    src={Arrow}
                    alt="Arrow icon"
                    className="icon arrow"
                    onClick={() => window.location.href = './#projects'}
                />
            </div>
        </section>
    )
}

export default Experience