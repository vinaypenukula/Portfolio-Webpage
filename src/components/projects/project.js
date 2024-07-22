import React from "react";
import "./project.css";
import { FaGithub } from "react-icons/fa";
import cf from '../../assets/cf.jpg';
import rap from '../../assets/rap.jpg';
import weather from '../../assets/weather.png';
import to_do from '../../assets/to_do.png';
import portfolio from '../../assets/portfolio.webp'

const Project = () => {
    return (
        <section className="projects">
            <div className="projectTitle">
                <h2>My <span className="pro">Projects</span></h2>
            </div>
            <div className="projects-grid">
                <div className="projectBox">
                    <img src={cf} alt="proj1" className="projectImg" /><br />
                    <h3>Coconut shells & Flyash</h3>
                    <p>Preparation of coconut shell & flyash</p>
                </div>
                <div className="projectBox">
                    <img src={rap} alt="proj2" className="projectImg2" /><br />
                    <h3>Utilization of RAP Aggregate</h3>
                    <p>Utilization of RAP aggregate in the preparation of concrete to improve its strength</p>
                </div>
                <div className="projectBox">
                    <img src={weather} alt="proj3" className="projectImg" /><br />
                    <h3>Weather App</h3>
                    <p>Developed a dynamic Weather App using React.js to provide real-time weather information and forecasts.</p>
                    <a href="https://github.com/vinaypenukula/Weather-App" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" />
                    </a>
                </div>
                <div className="projectBox">
                    <img src={to_do} alt="proj4" className="projectImg2" /><br />
                    <h3>To-Do-List App Redux</h3>
                    <p>Developed a To-Do List application using React.js and Redux for state management.</p>
                    <a href="https://github.com/vinaypenukula/To-do-list-redux" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" />
                    </a>
                </div>
                <div className="projectBox">
                    <img src={portfolio} alt="proj4" className="projectImg2" /><br />
                    <h3>Portfolio Webpage</h3>
                    <p>Welcome to my portfolio! This site showcases my work, skills, and projects using modern web technologies.</p>
                    <a href="https://github.com/vinaypenukula/To-do-list-redux" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Project;
