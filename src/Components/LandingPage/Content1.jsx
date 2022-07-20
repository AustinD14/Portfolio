import { Container } from "@mui/system";
import React from "react";
import "./Content1.css";
import Projects from "../Projects/Projects";

const Content1 = () => {
  return (
    <div className="content-1">
      <div className="shape">
        {/* <h1>see more</h1> */}
      </div>
      <div>
        <Container maxWidth="xl">

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
