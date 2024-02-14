import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { animateScroll } from "react-scroll";
const linkedinLink="https://linkedin.com/in/jitendravarma11";
const githubLink="https://github.com/jitendraVarma11";
const instagramLink="https://www.instagram.com/_jitendraverma_";

export const Footer = () => {
  const scrollToHome = () => {
    animateScroll.scrollToTop({ duration: 700 });
  };
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p>&copy; 2024 Jitendra Varma. All rights reserved.</p>

      <button onClick={scrollToHome} className="upbtn">
        <KeyboardDoubleArrowUpIcon className="up"/>
      </button>
    </footer>
  );
};
