import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase/firebase.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: 100
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 600,
    fontSize: "2rem"
  },
}));

export default function ButtonAppBar() {
    const [headerText, setheaderText] = useState("Chat Place");

    const classes = useStyles();
    const state = useSelector(state => state);
    const user = state.user.userInfo;

    console.log(user);

    let history = useHistory();

    useEffect(() => {
      return history.listen((location) => {
        let topic = location.pathname;

        if (
          topic === "/redux-exercise" ||
          topic === "/redux-exercise/" ||
          topic === "/" ||
          topic === ""
        ) {
          topic = "Chat Place";
        } else {
          topic = topic.slice(topic.lastIndexOf("/") + 1);
        }
        console.log(topic);
        setheaderText(topic);
      });
    });
    
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#100c08" }}>
        <Toolbar>
          {headerText !== "Chat Place" ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => history.push("/redux-exercise/")}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              className={classes.menuButton}
              style={{
                color: "#100c08",
                cursor: "inherit",
              }}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            {headerText}
          </Typography>
          { user.isLogin ? (
            <Button
              color="inherit"
              onClick={() => auth.signOut()}
            >
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => history.push("/redux-exercise/login")}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
