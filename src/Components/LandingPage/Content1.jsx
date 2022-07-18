import { Container } from "@mui/system";
import React from "react";
import "./Content1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Content1 = () => {
  return (
    <div className="content-1">
      <div className="shape">
        <h1>see more</h1>
      </div>
      <div>
        <Container>
          <div className="links">
            <FontAwesomeIcon icon={faGithub} />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Content1;
