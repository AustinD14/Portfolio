import React from "react";
import { Container } from "@mui/system";
import "./Main.css";


const Main = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <div className="landing-page">
          <div className="text-container">
            <div className="header">
              <h1>Carl Austin Dimalanta</h1>
              <h3>Web Developer</h3>
            </div>
            <div className="intro">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;
