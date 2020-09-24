import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButton(props) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ background: "#100c08" }}
      className={classes.button}
      endIcon={props.icon !== null ? <Icon>{props.icon}</Icon> : null}
      onClick={props.click}
    >
      {props.text}
    </Button>
  );
}
