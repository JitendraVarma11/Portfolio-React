import React, { useState} from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import pdfUrl from "../assets/pdf/JitendraVarmaResume.pdf"

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="container">
      <div className="logo-brand">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
          <li>
            <Link
              to="home"
              className="NavLink"
              smooth={true}
              duration={500}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills-container"
              smooth={true}
              duration={500}
              className="NavLink"
              onClick={toggleMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="project"
              className="NavLink"
              onClick={toggleMobileMenu}
              smooth={true}
              duration={700}
            >
              Projects
            </Link>
          </li>
           <li>
            <a
              href={pdfUrl}
              target="_blank"
              className="NavLink"
              onClick={toggleMobileMenu}
            >
              Resume
            </a>
          </li>
        </ul>
        <span className="contact-btn">
          <button onClick={scrollToContact}>
            <span>Let's Connect</span>
          </button>
        </span>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </nav>
    </div>
  );
};
