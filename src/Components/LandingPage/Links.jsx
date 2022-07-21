import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";
import { Link } from "@mui/material";

const Links = () => {
  return (
    <div className="links">
      <Link
        href="https://github.com/AustinD14"
        target="_blank"
        underline="hover"
        rel="noopener"
        color="inherit"
      >
        <div className="link-item">
          <FontAwesomeIcon icon={faGithub} className="icons" />
          <h2>Github</h2>
        </div>
      </Link>
      <Link
        href="https://drive.google.com/file/d/1bOWrA3mYWsEmgZaphG5lTudc-a4b_fcD/view?usp=sharing"
        target="_blank"
        underline="hover"
        rel="noopener"
        color="inherit"
      >
        <div className="link-item">
          <FontAwesomeIcon icon={faUser} className="icons" />
          <h2>Resume</h2>
        </div>
      </Link>
      <Link
        href="https://www.linkedin.com/in/carl-austin-dimalanta-069b0118b/"
        target="_blank"
        underline="hover"
        rel="noopener"
        color="inherit"
      >
        <div className="link-item">
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
          <h2>LinkedIn</h2>
        </div>
      </Link>
      <Link href="#projects" underline="hover" color="inherit">
        <div className="link-item">
          <FontAwesomeIcon icon={faCaretSquareDown} className="icons" />
          <h2>Projects</h2>
        </div>
      </Link>
    </div>
  );
};

export default Links;
