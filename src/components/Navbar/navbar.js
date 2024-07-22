import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <a href="index.html" className="nav__logo">Vinay</a>

            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="nav_link">Home</Link>
                    </li>
                    <li className="nav_item">
                        <Link activeClass="active" to='about' spy={true} smooth={true} offset={-80} duration={500} className="nav_link">About</Link>
                    </li>
                    <li className="nav_item">
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500} className="nav_link">Projects</Link>
                    </li>
                    <li className="nav_item">
                        <Link activeClass="active" to='skill' spy={true} smooth={true} offset={-70} duration={500} className="nav_link">Skills</Link>
                    </li>
                    <li className="nav_item">
                        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="nav_link">Contact</Link>
                    </li>
                </ul>
            </div>

            <i className="fa-solid fa-bars mobMenu" onClick={() => setShowMenu(!showMenu)}></i>

            <div className="navbar_menu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to='about' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to='skill' spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;
