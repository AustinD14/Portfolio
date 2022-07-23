import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, Chip } from "@mui/material";
import "./Projects.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const Project = (props) => {
  const { title, desc, img, code, website, stack } = props;
  const matches = useMediaQuery("(min-width:1650px)");
  const cardWidth = matches ? 650 : 450;

  const listStack = stack.map((stack, index) => (
    <Chip key={index} label={stack} variant="outlined" size="small" />
  ));

  return (
    <div className="project-item">
      <Card sx={{ maxWidth: cardWidth }}>
        <Link href={website ? website : code} target="_blank" rel="noopener">
          {img ? (
            <CardMedia component="img" alt={title} height="auto" image={img} />
          ) : null}
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <div className="footer">
          <CardActions>
            <Link href={code} target="_blank" rel="noopener">
              <Button size="small">Code</Button>
            </Link>
            {website ? (
              <Link href={website} target="_blank">
                <Button size="small">Website</Button>
              </Link>
            ) : null}
          </CardActions>
          <div className="stack">{listStack}</div>
        </div>
      </Card>
    </div>
  );
};

export default Project;
