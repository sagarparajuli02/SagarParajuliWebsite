import React from "react";
import "./Portfolio.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  Button,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import usePortfolio from "./styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#000",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#fff",
  },
}));

export default function Portfolioo() {
  const classPortfolio = usePortfolio();
  return (
    <div className="containerHome align-items-center my-auto" id="portfolio">
      <div className="placeholder">
        <h5>Portfolio</h5>
      </div>
      <h3 className="recentWork">My Recent Works</h3>
      <Container className={classPortfolio.container}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classPortfolio.card}>
              <CardMedia
                className={classPortfolio.icon}
                image="https://assets.materialup.com/uploads/a705ca2a-3f97-499f-80f8-bc8a8bcd40b1/preview.jpg"
                title="Image "
              />

              <CardContent className={classPortfolio.cardContent}>
                <Typography varient="h2" color="textPrimary">
                  Restaurant App
                </Typography>
                <Typography varient="h5" color="textSecondary">
                  I build this app in my master project. This is an andorid app
                  with admin panel build in react Js
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://google.com" class="">
                    View Project
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classPortfolio.card}>
              <CardMedia
                className={classPortfolio.icon}
                image="https://college.adelaide.edu.au/wp-content/uploads/2019/06/Copy-of-IELTS-2.png"
                title="Image "
              />

              <CardContent className={classPortfolio.cardContent}>
                <Typography varient="h2" color="textPrimary">
                  IELTS Band 8 App
                </Typography>
                <Typography varient="h5" color="textSecondary">
                  This is an andoird app which help user to be familar with
                  IELTS exams.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://google.com" class="">
                    View Project
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classPortfolio.card}>
              <CardMedia
                className={classPortfolio.icon}
                image="https://www.clio.com/wp-content/uploads/2020/08/Clio_2020-Blog_Image-Programming_for_Lawyers.png"
                title="Image "
              />

              <CardContent className={classPortfolio.cardContent}>
                <Typography varient="h2" color="textPrimary">
                  Learn Web Programming Offline
                </Typography>
                <Typography varient="h5" color="textSecondary">
                  It is an andoird app which allows users to learn about
                  differetn web development languages and frameworks.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://google.com" class="">
                    View Project
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classPortfolio.card}>
              <CardMedia
                className={classPortfolio.icon}
                image="https://www.elegantthemes.com/blog/wp-content/uploads/2019/09/000-Discourse-Community.png"
                title="Image "
              />

              <CardContent className={classPortfolio.cardContent}>
                <Typography varient="h2" color="textPrimary">
                  Forum Nepal
                </Typography>
                <Typography varient="h5" color="textSecondary">
                  Forum nepal was a laveral web app like stack overflow where
                  people can share their views. It was buuild using PHP
                  framework Laravel.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://google.com" class="">
                    View Project
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classPortfolio.card}>
              <CardMedia
                className={classPortfolio.icon}
                image="https://dronebotworkshop.com/wp-content/uploads/2020/09/Basic-Logic-Gates.jpeg"
                title="Image "
              />

              <CardContent className={classPortfolio.cardContent}>
                <Typography varient="h2" color="textPrimary">
                  Logic Gates Simulation
                </Typography>
                <Typography varient="h5" color="textSecondary">
                  This is a web app which allows users to make Logic gates
                  simulations.It was build using GO js.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://google.com" class="">
                    View Project
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classPortfolio.card}>
              <CardMedia
                className={classPortfolio.icon}
                image="https://i.ytimg.com/vi/ZBZLx0ZLEJQ/maxresdefault.jpg"
                title="Image "
              />

              <CardContent className={classPortfolio.cardContent}>
                <Typography varient="h2" color="textPrimary">
                  Car Racing Game
                </Typography>
                <Typography varient="h5" color="textSecondary">
                  I develop this game during my second year in bachelor using C#
                  and Javascript in Unity.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://google.com" class="">
                    View Project
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
