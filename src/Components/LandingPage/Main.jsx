import React from "react";
import { Container } from "@mui/system";
import "./Main.css";
import LinkDrawer from "./LinkDrawer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Drawer, Link } from "@mui/material";

const Main = () => {
  const matches = useMediaQuery("(min-width:1000px)");
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
          {matches ? (
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
            </div>
          ) : (
            <div className="menu">
              <LinkDrawer />
            </div>
          )}
        </div>
      </Container>
      <div className="bottom-bg">
        <h2>see more</h2>
      </div>
    </>
  );
};

export default Main;
