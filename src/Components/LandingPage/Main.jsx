import React from "react";
import { Container } from "@mui/system";
import "./Main.css";

import LinkDrawer from "./LinkDrawer";
import Links from "./Links";

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
          <Links />
        </div>
      </Container>
      <div className="bottom-bg" />
    </>
  );
};

export default Main;
