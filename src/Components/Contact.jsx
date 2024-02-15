import React, { useState } from "react";
import "./contact.css";
import contactSvg from "../assets/img/Contact us-amico.svg";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <ScrollAnimation
        animateIn="animate__pulse"
        duration={1}
        delay={100}
        animateOnce={true}
      >
        <h2>Contact me!</h2>
      </ScrollAnimation>
      <div className="container1">
        <div className="svg">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            duration={1}
            delay={100}
          >
            <img src={contactSvg} alt="contact-svg" className="contact-svg"/>
          </ScrollAnimation>
        </div>
        <form
          id="Box"
          action="https://formspree.io/f/xnqepvvb"
          method="POST"
          autoComplete="off"
        >
          <div className="fields">
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
              delay={200}
            >
              <TextField
                label="Name"
                type="text"
                className="textfield"
                variant="outlined"
                name="userName"
                required
              />
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
              delay={300}
            >
              <TextField
                label="Email"
                type="email"
                className="textfield"
                variant="outlined"
                name="email"
                required
              />
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1}
              delay={400}
            >
              <TextField
                label="Message"
                type="text"
                className="textfield"
                multiline
                rows={4}
                variant="outlined"
                name="message"
                required
              />
            </ScrollAnimation>
          </div>

          <ScrollAnimation
            animateIn="animate__fadeInUp"
            duration={1}
            delay={500}
          >
            <button type="submit">
              Send &nbsp; <SendIcon className="send-btn" />
            </button>
          </ScrollAnimation>
        </form>
      </div>
    </div>
  );
};
