import { Container } from "@mui/system";
import React from "react";
import "./Content1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Projects from "../Projects/Projects";

const Content1 = () => {
  return (
    <div className="content-1">
      <div className="shape">
        <h1>see more</h1>
      </div>
      <div>
        <Container>
          <div className="links">
            <FontAwesomeIcon icon={faGithub} className="icons" />
            <FontAwesomeIcon icon={faLinkedin} className="icons" />
          </div>
          <div className="project-container">
            <h1>Projects</h1>
            <div className="projects">
              <Projects />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Content1;
