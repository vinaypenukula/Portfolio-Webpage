import React from "react";
import "./skills.css"

const Skills = () =>{
    return(
        <section className="skill">
            <div className="skillTitle">
                <h2>My <span className="skil">Skills</span></h2>
            </div>
            <div className="skillCon ">
                <div className="skillBox grid">
                <i class="fa-brands fa-html5"></i>
                    <h3>HTML</h3>
                </div>
                <div className="skillBox">
                <i class='bx bxl-css3' ></i>
                    <h3>CSS</h3>
                </div>
                <div className="skillBox">
                <i class='bx bxl-javascript' ></i>
                    <h3>JavaScript</h3>
                </div>
                <div className="skillBox">
                <i class='bx bxl-bootstrap' ></i>
                    <h3>Bootstrap</h3>
                </div>
                <div className="skillBox">
                <i class='bx bxl-react' ></i>
                    <h3>React</h3>
                </div>
            </div>
        </section>
    )
}

export default Skills;