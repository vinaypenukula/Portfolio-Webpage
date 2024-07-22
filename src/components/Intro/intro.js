import React from "react";
import './intro.css';
import bg from '../../assets/home-right.webp';
import pk from '../../assets/pk.pdf'

const Intro = () => {
    return(
        <section className="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">Im <span className="introName">vinay</span><br/>website designer</span>
                <p className="introPara">"Welcome to my portfolio! I am vinay, a passionate civil student at Kommuri Pratap Reddy Institute of Technology.<br/> Explore my projects, skills, and experiences as I embark on my journey to make a mark in the IT world."</p>
                
                <div className="sclIcon">
                <a href="https://www.facebook.com/penukula.vinay"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/vinay___penukula/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://x.com/VinayPenukula"><i class="fa-brands fa-square-x-twitter"></i></a>
                <a href="https://www.linkedin.com/in/vinay-penukula-96b8552bb/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
                <a href={pk} download className="pk"><button className="btn">Download Resume</button></a>
            </div>
            <img src={bg} alt="profile" className="bg"></img>

        </section>
    )
}

export default Intro;