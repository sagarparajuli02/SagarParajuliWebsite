import React from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Box } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
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

export default function Home() {
  const classes = useStyles();

  return (
    <div className="containerHome align-items-center my-auto" id="home">
      <Grid alignItems="center" justify="center" container>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <h1>Hi There, I'm</h1>
            <h2>Sagar Parajuli</h2>
            <Box lineHeight={2} m={1} letterSpacing={2}>
              <p>
                I am a FullStack Software Developer with more then 2 years of
                Programming Exprience.​
              </p>
            </Box>
            <button type="button" className="btn">
              My Resume
            </button>

            <a href="mailto:connect.sagarparajuli@gmail.com?subject=your title&body=">
              <button
                href="mailto:EMAILADDRESS"
                type="button"
                className="btnEmail"
              >
                <EmailIcon /> Email Me{" "}
              </button>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <img className="appLogo" src="/appLogo.png" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
