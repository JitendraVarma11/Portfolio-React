import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Import your CSS for styling if needed
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { animateScroll } from "react-scroll";

export const Footer = () => {
  const scrollToHome = () => {
    animateScroll.scrollToTop({ duration: 700 });
  };
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://linkedin.com/in/jitendravarma11"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/jitendraVarma11"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/_jitendraverma_"
          target="_blank"
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
