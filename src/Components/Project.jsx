import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./project.css";
import project1img from "../assets/img/NetflixImage.jpg";
import project2img from "../assets/img/wanderlust-image.jpg";
import project3img from "../assets/img/portfolio-image.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const Project = () => {
  return (
    <div id="project">
      <ScrollAnimation
          animateIn="animate__pulse"
          duration={1}
          delay={100}
          animateOnce={true}
        >
      <h2>Project</h2>
      </ScrollAnimation>

      <div className="cards">
      <ScrollAnimation
          animateIn="animate__fadeInLeft"
          duration={1}
          delay={100}
        >
        <Card sx={{ maxWidth: 345 }} className="project-card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={project1img}
            className="project-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Netflix Clone
            </Typography>
            <Typography variant="body2" className="desc">
            Netflix Clone A simple HTML and CSS implementation of a Netflix clone. Features: Responsive design for various screen sizes.
            </Typography>
          </CardContent>
          <CardActions className="card-action">
            <a href="https://graceful-kheer-301fde.netlify.app">
              <Button
                size="small"
                className="view-btn"
                endIcon={<VisibilityIcon className="view-icon" />}
              >
                View
              </Button>
            </a>
            <a href="https://github.com/JitendraVarma11/Netflix-Clone">
              <Button
                size="small"
                className="source-code-btn"
                endIcon={<GitHubIcon className="github-icon" />}
              >
                Source
              </Button>
            </a>
          </CardActions>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation
          animateIn="animate__fadeInRight"
          duration={1}
          delay={200}
        >
        <Card sx={{ maxWidth: 345 }} className="project-card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            image={project2img}
            className="project-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wanderlust
            </Typography>
            <Typography variant="body2" className="desc">This project is a basic clone of the platform Airbnb, developed using the MERN. 
            </Typography>
          </CardContent>
          <CardActions className="card-action">
            <a href="https://wanderlust-ruqf.onrender.com/listings">
              <Button
                size="small"
                className="view-btn"
                endIcon={<VisibilityIcon className="view-icon" />}
              >
                View
              </Button>
            </a>

            <a href="https://github.com/JitendraVarma11/WanderLust-MERN-Project.git">
              <Button
                size="small"
                className="source-code-btn"
                endIcon={<GitHubIcon className="github-icon" />}
              >
                Source
              </Button>
            </a>
          </CardActions>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation
          animateIn="animate__fadeInLeft"
          duration={1}
          delay={300}
        >
        <Card sx={{ maxWidth: 345 }} className="project-card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={project3img}
            className="project-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Portfolio-React
            </Typography>
            <Typography variant="body2" className="desc">
            Designed and developed a personal portfolio website using React.js, showcasing projects, skills, and experience.
            </Typography>
          </CardContent>
          <CardActions className="card-action">
            <a href="https://jitendra-varma.vercel.app/">
              <Button
                size="small"
                className="view-btn"
                endIcon={<VisibilityIcon className="view-icon" />}
              >
                View
              </Button>
            </a>
            <a href="https://github.com/JitendraVarma11/Portfolio-React.git">
              <Button
                size="small"
                className="source-code-btn"
                endIcon={<GitHubIcon className="github-icon" />}
              >
                Source
              </Button>
            </a>
          </CardActions>
        </Card>
      </ScrollAnimation>
      </div>
    </div>
  );
};
