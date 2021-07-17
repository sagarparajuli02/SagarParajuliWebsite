import React from "react";

import "./About.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, List, Box } from "@material-ui/core";
import { ListGroup } from "react-bootstrap";
function About() {
  return (
    <div className="containerHome" id="about">
      <div className="placeholder">
        <h5>ABout</h5>
      </div>
      <Grid alignItems="center" justify="center" container>
        <Grid item xs={12} sm={6}>
          <div>
            <h3>About Me</h3>
            <Box lineHeight={2} m={1}>
              <p className="aboutMe">
                Hello, my name is Sagar Parajuli . I am from Nepal and currenlty
                i had completed my Masters Degree in Software Engineering. I am
                looking for some IT jobs or internships where i and grow my
                skill even more. I have exprience in Andoird development and web
                development with react and node js.
              </p>
            </Box>
          </div>
        </Grid>
        <Grid
          alignItems="center"
          justify="center"
          container
          item
          xs={12}
          sm={6}
        >
          <div className="skills">
            <h3>Languages & Frameworks</h3>
            <div>
              <ul className="languageList">
                <li>Java</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Node JS</li>
                <li>PHP</li>
                <li>Android</li>
              </ul>
            </div>
            <h3>Design Tools</h3>
            <div>
              <ul className="languageList">
                <li>Inskape</li>
                <li>Photoshop</li>
                <li>Canva</li>
                <li>Graphic Design</li>
                <li>Ui/Ux Design</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>

      <div className="section-title">
        <h2>
          <span>My Exprience</span>
        </h2>
      </div>
      <div className="exprienceSection">
        <ul>
          <li className="row">
            <div class="col-sm-4 col-xl-3">
              <h6>April, 2018 to August, 2018</h6>
            </div>
            <div class="col-sm-8 col-xl-9 ps-xl-4">
              <h5>Java Developer</h5>
              <p>
                {" "}
                At this company i worked as a java developer and during the
                peroid we worked on a governmental project .
              </p>
              <span>Everest Technomania, Nepal</span>
            </div>
          </li>
          <li className="row">
            <div class="col-sm-4 col-xl-3">
              <h6>August, 2018 to January, 2019</h6>
            </div>
            <div class="col-sm-8 col-xl-9 ps-xl-4">
              <h5>Android Developer</h5>
              <p>
                I worked as an andorid developer at this company where we work
                on developinf andoird application for
              </p>
              <span>-Uthsha Tech, Nepal</span>
            </div>
          </li>
          <li className="row">
            <div class="col-sm-4 col-xl-3">
              <h6>Currently</h6>
            </div>
            <div class="col-sm-8 col-xl-9 ps-xl-4">
              <h5>Freelancing</h5>
              <p>
                I am a freelancing developer. I build andorid apps and upload to
                playstore.
              </p>
              <span>Australia</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
