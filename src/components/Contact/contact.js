import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Form submitted"); // Debugging log

        emailjs
            .sendForm(
                "service_nvo4xlv", 
                "template_k7mrzol", 
                form.current, 
                "EqW3Am6pCkt0fUEfX"
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text); // Added result.text for more details
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <section className="contactPage">
            <div className="contact">
                <h2 className="contactTitle">Contact <span className="cont">Me</span></h2>
                <span className="contactDesc">Get in touch</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        className="name"
                        placeholder="Your Name"
                        name="from_name"
                        required
                    />
                    <input
                        type="email"
                        className="email"
                        placeholder="Your Email"
                        name="from_email"
                        required
                    />
                    <textarea
                        className="msg"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="submitBtn">
                        Submit
                    </button>
                </form>

                <div className="contactIcons">
                    <a href="mailto:penukulavinay66@gmail.com">
                        <p className="emailText">
                            <i className="fa-regular fa-paper-plane "></i>
                            penukulavinay66@gmail.com
                        </p>
                    </a>
                    <br />
                    <p className="phoneText">
                        <i className="fa-solid fa-phone phon"></i>
                        8074467318
                    </p>
                    <div className="sclIcons">
                        <a href="https://www.facebook.com/penukula.vinay">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/vinay___penukula/">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://x.com/VinayPenukula">
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vinay-penukula-96b8552bb/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                <p>Copyright vinay. Made by me</p>
            </div>
        </section>
    );
};

export default Contact;
