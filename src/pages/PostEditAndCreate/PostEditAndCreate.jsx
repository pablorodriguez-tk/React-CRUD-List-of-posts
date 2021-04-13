import React from "react";
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
import Spinner from "../../components/Spinner";
import { createPost, updatePost } from "../../api/jsonplaceholder";
import { useAppContext } from "../../AppContext";
import { useForm, Controller } from "react-hook-form";

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
  const { setPosts, loading, setLoading } = useAppContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoBack = () => {
    history.goBack();
  };

  const isCreate = props.location.pathname === "/create/post";

  const onSubmit = (input) => {
    const inputData = { title: input.title, body: input.body };

    const handleCreate = async () => {
      setLoading(true);
      const createData = { userId: 1, ...inputData };
      const response = await createPost(createData);
      setPosts((prevPosts) => [response.createdPost, ...prevPosts]);
      history.push("/");
      setLoading(false);
    };

    const handleUpdate = async () => {
      const response = await updatePost(inputData, post);
      setPosts((prevPosts) => {
        setLoading(true);
        const prevPostIdx = prevPosts.findIndex((p) => p.id === post.id);
        prevPosts[prevPostIdx] = response.updatedPost;
        return [...prevPosts];
      });
      history.push("/");
      setLoading(false);
    };

    if (post) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <EditIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {isCreate ? "Create Post" : "Edit Post"}
              </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Post Title"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      id="Post Title"
                      autoFocus
                      type="text"
                      multiline={true}
                      error={errors.title}
                      helperText={errors.title && "Post title is required"}
                    />
                  )}
                  rules={{ required: true }}
                  name="title"
                  control={control}
                  defaultValue={post ? post.title : ""}
                />
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Post Body"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      id="Post Body"
                      type="text"
                      multiline={true}
                      error={errors.body}
                      helperText={errors.body && "Post body is required"}
                    />
                  )}
                  rules={{ required: true }}
                  name="body"
                  control={control}
                  defaultValue={post ? post.body : ""}
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
          </Container>{" "}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default PostEditAndCreate;
