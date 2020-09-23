import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentList } from "../../redux/comment/comment.selector.js";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
    const [headerText, setheaderText] = useState("Chat Place");

    const classes = useStyles();
    const state = useSelector(state => state);
    let commentList = getCommentList(state);

    let history = useHistory();

    useEffect(() => {
      return history.listen((location) => {
        let topic = location.pathname;

        if (topic === "/" || topic === "") {
          topic = "Chat Place";
        } else {
          topic = topic.slice(topic.lastIndexOf("/") + 1);
        }
        console.log(topic);
        setheaderText(topic);
      });
    }, [history]);

    useEffect(() => {
      return history.listen((location) => {
        let topic = location.pathname;

        if (topic === "/" || topic === "") {
          topic = "Chat Place";
        } else {
          topic = topic.slice(topic.lastIndexOf("/") + 1);
        }
        console.log(topic);
        setheaderText(topic);
      });
    }, [commentList]);

    // useEffect(() => {
    //   let topic = history.location.pathname;

    //   if (topic === "/" || topic === "") {
    //     topic = "Chat Place";
    //   } else {
    //     topic = topic.slice(topic.lastIndexOf("/") + 1);
    //   }
    //   console.log(topic);
    //   setheaderText(topic);
    // })
    
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#100c08" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {headerText.toUpperCase()}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
