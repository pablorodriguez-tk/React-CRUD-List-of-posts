import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
import { createPost, updatePost } from "../../api/jsonplaceholder";
import { useAppContext } from "../../AppContext";

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
  const { post } = useLocation();
  const { posts, setPosts } = useAppContext();

  const [data, setData] = useState({
    title: post ? post.title : "",
    body: post ? post.body : "",
  });

  const handleGoBack = () => {
    history.goBack();
  };

  const isCreate = props.match.params.postId === "create";

  const handleCreate = async () => {
    const createData = { ...data, userId: 1 };
    const response = await createPost(createData);
    setPosts((prevPosts) => [response.createdPost, ...prevPosts]);
    history.goBack();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (post) {
      updatePost(data, post);
      // setPosts(data);
      // console.log(data);
      // console.log(posts);
      history.goBack();
      //TODO: terminar post y update
    } else {
      handleCreate();
    }

    console.log(data.title, data.body);
  };

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EditIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isCreate ? "Create Post" : "Edit Post"}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Post Title"
            label="Post Title"
            name="title"
            autoFocus
            type="text"
            multiline={true}
            onChange={handleInputChange}
            value={data.title}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Post Body"
            label="Post Body"
            name="body"
            type="text"
            multiline={true}
            onChange={handleInputChange}
            value={data.body}
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
