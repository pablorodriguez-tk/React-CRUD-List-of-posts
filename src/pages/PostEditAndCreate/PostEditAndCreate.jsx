import React from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  makeStyles,
  Container,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PostEditAndCreate = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EditIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.match.params.postId === "create" ? "Create Post" : "Edit Post"}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Post Title"
            label="Post Title"
            name="Post Title"
            autoFocus
            type="text"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Post Details"
            label="Post Details"
            type="text"
            id="Post Details"
            multiline={true}
          />
          <Grid container justify="space-between">
            <Grid item xs={3}>
              <Button
                className={classes.submit}
                variant="contained"
                onClick={handleGoBack}
              >
                Go Back
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default PostEditAndCreate;
