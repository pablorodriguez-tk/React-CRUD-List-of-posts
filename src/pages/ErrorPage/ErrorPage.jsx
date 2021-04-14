import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import Image from "../../images/404.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    maxWidth: 600,
    width: "80vw",
  },
  media: {
    height: "40vh",
  },
});

const ErrorPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={Image}
          title="Error 404 image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            404
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This page could not be found.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component={Link} to={"/"}>
            homepage
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ErrorPage;
