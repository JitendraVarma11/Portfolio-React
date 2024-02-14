import React from "react";
import "./Skill.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import html from "../assets/img/HTML.png";
import css from "../assets/img/CSS.png";
import js from "../assets/img/JS.png";
import reactJs from "../assets/img/REACT.png";
import bootstrap from "../assets/img/Bootstrap.png";
import materialUi from "../assets/img/MaterialUI.png";
import nodeJs from "../assets/img/NODEJS.png";
import express from "../assets/img/EXPRESSJS.png";
import mysql from "../assets/img/SQL.png";
import mongoDB from "../assets/img/MONGODB.png";
import git from "../assets/img/git.png";
import github from "../assets/img/Github.png";
import vscode from "../assets/img/VScode1.png";
import postman from "../assets/img/postman1.png";
import java from "../assets/img/JAVA.png";

export const Skills = () => {
  const SkillAnimation = ({ children }) => {
    return (
      <ScrollAnimation animateIn="animate__fadeInUp" duration={1} delay={100}>
        {children}
      </ScrollAnimation>
    );
  };
  return (
    <div className="skills-container" id="skills-container">
      <div className="skill-container-2" id="skills-container-2">
        <ScrollAnimation
          animateIn="animate__pulse"
          duration={1}
          delay={100}
          animateOnce={true}
        >
          <h2 className="skills-title">Skills</h2>
          <p className="skills-subtitle">
            Here are some of my skills on which I have been working.
          </p>
        </ScrollAnimation>
        <div className="wrapper">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            duration={1}
            delay={200}
            animateOnce={true}
          >
            <div className="skills-section">
              <h3 className="skills-section-title">Frontend</h3>
              <div className="skills-section-content">
                <SkillAnimation>
                  <div className="skill">
                    <img src={html} alt="HTML" />
                    <span className="skill-name">HTML</span>
                  </div>
                </SkillAnimation>

                <SkillAnimation>
                  <div className="skill">
                    <img src={css} alt="CSS" />
                    <span className="skill-name">CSS</span>
                  </div>
                </SkillAnimation>

                <SkillAnimation>
                  <div className="skill">
                    <img src={js} alt="JS" />
                    <span className="skill-name">JavaScript</span>
                  </div>
                </SkillAnimation>

                <SkillAnimation>
                  <div className="skill">
                    <img src={reactJs} alt="react" />
                    <span className="skill-name">ReactJS</span>
                  </div>
                </SkillAnimation>

                <SkillAnimation>
                  <div className="skill">
                    <img src={bootstrap} alt="Bootstrap" />
                    <span className="skill-name">Bootstrap</span>
                  </div>
                </SkillAnimation>
                <SkillAnimation>
                  {" "}
                  <div className="skill">
                    <img src={materialUi} alt="Material UI" />
                    <span className="skill-name">Material UI</span>
                  </div>
                </SkillAnimation>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            duration={1}
            delay={200}
            animateOnce={true}
          >
            <div className="skills-section">
              <h3 className="skills-section-title">Backend</h3>
              <div className="skills-section-content">
                <SkillAnimation>
                  <div className="skill">
                    <img src={nodeJs} alt="NodeJS" />
                    <span className="skill-name">NodeJS</span>
                  </div>
                </SkillAnimation>

                <SkillAnimation>
                  <div className="skill">
                    <img src={express} alt="ExpressJS" />
                    <span className="skill-name">ExpressJS</span>
                  </div>
                </SkillAnimation>

                <SkillAnimation>
                  <div className="skill">
                    <img src={java} alt="java" />
                    <span className="skill-name">Java</span>
                  </div>
                </SkillAnimation>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            duration={1}
            delay={200}
            animateOnce={true}
          >
            <div className="skills-section">
              <h3 className="skills-section-title">Database</h3>
              <div className="skills-section-content">
                <SkillAnimation>
                  <div className="skill">
                    <img src={mysql} alt="MySQL" />
                    <span className="skill-name">MySQL</span>
                  </div>
                </SkillAnimation>
                <SkillAnimation>
                  <div className="skill">
                    <img src={mongoDB} alt="MongoDB" />
                    <span className="skill-name">MongoDB</span>
                  </div>
                </SkillAnimation>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            duration={1}
            delay={200}
            animateOnce={true}
          >
            <div className="skills-section">
              <h3 className="skills-section-title">Others</h3>
              <div className="skills-section-content">
                <SkillAnimation>
                  <div className="skill">
                    <img src={git} alt="Git" />
                    <span className="skill-name">Git</span>
                  </div>
                </SkillAnimation>
                <SkillAnimation>
                  <div className="skill">
                    <img src={github} alt="GitHub" />
                    <span className="skill-name">GitHub</span>
                  </div>
                </SkillAnimation>
                <SkillAnimation>
                  {" "}
                  <div className="skill">
                    <img src={vscode} alt="VS Code" />
                    <span className="skill-name">VS Code</span>
                  </div>
                </SkillAnimation>

                <SkillAnimation>
                  <div className="skill">
                    <img src={postman} alt="Postman" />
                    <span className="skill-name">Postman</span>
                  </div>
                </SkillAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};
