import { Container } from "@mui/system";
import React from "react";
import "./Content1.css";
import Projects from "../Projects/Projects";

const Content1 = () => {
  return (
    <div className="content-1" id="projects">
      <div className="shape">{/* <h1>see more</h1> */}</div>
      <div>
        <Container maxWidth="xl">
          <div className="project-container">
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
