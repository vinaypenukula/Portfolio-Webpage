import React, { useState } from "react";
import './about.css';
import Education from "./education";
import Certifications from "./certifications";
import Intrests from "./intrests";

const About = () => {
    const [activeTab, setActiveTab] = useState('education');

    return (
        <>
            <section className='about' id="About">
                <span className='aboutTitle'>About <span className="me">Me</span></span>
                <span className='aboutDesc'>
                    "I am Vinay, a recent graduate in Civil Engineering from Kommuri Pratap Reddy Institute Of Technology. My academic journey has been driven by a passion for web development, and I am excited to transition from a student to a professional, ready to contribute and make an impact."
                </span>
                <div className="titles">
                    <p
                        className={`links ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        Education
                    </p>
                    <p
                        className={`links ${activeTab === 'certifications' ? 'active' : ''}`}
                        onClick={() => setActiveTab('certifications')}
                    >
                        Certifications
                    </p>
                    <p
                        className={`links ${activeTab === 'intrests' ? 'active' : ''}`}
                        onClick={() => setActiveTab('intrests')}
                    >
                        Intrests
                    </p>
                </div>
            </section>

            <div className="data">
                {activeTab === 'education' && <Education />}
                {activeTab === 'certifications' && <Certifications />}
                {activeTab === 'intrests' && <Intrests />}
            </div>
        </>
    );
}

export default About;
