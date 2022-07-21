import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";
import { Drawer, Link } from "@mui/material";

const LinkDrawer = () => {
  const DRAWERPOSITION = "bottom";
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link
          href="https://github.com/AustinD14"
          target="_blank"
          underline="hover"
          rel="noopener"
          color="inherit"
        >
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faGithub} className="drawerIcons" />
              </ListItemIcon>
              <ListItemText primary="Github" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link
          href="https://drive.google.com/file/d/1bOWrA3mYWsEmgZaphG5lTudc-a4b_fcD/view?usp=sharing"
          target="_blank"
          underline="hover"
          rel="noopener"
          color="inherit"
        >
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faUser} className="drawerIcons" />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link
          href="https://www.linkedin.com/in/carl-austin-dimalanta-069b0118b/"
          target="_blank"
          underline="hover"
          rel="noopener"
          color="inherit"
        >
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={faLinkedin} className="drawerIcons" />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link Link href="#projects" underline="hover" color="inherit">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={faCaretSquareDown}
                  className="drawerIcons"
                />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={DRAWERPOSITION}>
        <Button onClick={toggleDrawer(DRAWERPOSITION, true)} className="drawerButton">

          <FontAwesomeIcon icon={faEllipsis} className="menuBar" />
        </Button>
        <Drawer
          anchor={DRAWERPOSITION}
          open={state[DRAWERPOSITION]}
          onClose={toggleDrawer(DRAWERPOSITION, false)}
        >
          {list(DRAWERPOSITION)}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default LinkDrawer;
