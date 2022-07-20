import React from "react";
import { Container } from "@mui/system";
import "./Main.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Main = () => {
  return (
    <>
      <div className="top-bg" />
      <Container maxWidth="lg">
        <div className="landing-page">
          <div className="text-container">
            <div className="header">
              <h1>Carl Austin Dimalanta</h1>
              <h3>Web Developer</h3>
            </div>
            <div className="intro">
              <p>
                Web developer with a Bachelor's Degree in Computer Science
                specializing in developing user-friendly websites, and
                troubleshooting customer-facing software. Has demonstrated
                knowledge of the software development life cycle, the ability to
                write tested code, and a motivation to learn new things.
              </p>
            </div>
          </div>
          <div className="links">
            <div className="link-item">
              <FontAwesomeIcon icon={faGithub} className="icons" />
              <h2>Github</h2>
            </div>
            <div className="link-item">
              <FontAwesomeIcon icon={faUser} className="icons" />
              <h2>Resume</h2>
            </div>
            <div className="link-item">
              <FontAwesomeIcon icon={faLinkedin} className="icons" />
              <h2>LinkedIn</h2>
            </div>
          </div>
        </div>
      </Container>
      <div className="bottom-bg">
        <h2>see more</h2>
      </div>
    </>
  );
};

export default Main;
