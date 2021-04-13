import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../../AppContext";
import { getPostById } from "../../api/jsonplaceholder";
import Spinner from "../../components/Spinner";
import { useHistory } from "react-router-dom";
import GeneralButton from "../../components/Buttons";
import AlertDialog from "../../components/AlertDialog";
import {
  Button,
  Typography,
  CardContent,
  CardActions,
  Card,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "60%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pagetitle: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  body: {},
});

const Post = () => {
  const history = useHistory();
  const { postId } = useParams();
  const { loading, posts, setLoading, isSignedIn } = useAppContext();
  const [post, setPost] = useState([]);
  const classes = useStyles();

  const handeGetPostById = async (postId) => {
    setLoading(true);
    const response = await getPostById(postId);
    setPost(response.post);
    setLoading(false);
  };

  useEffect(() => {
    const findPost = posts.find(({ id }) => id === parseInt(postId));
    if (findPost) {
      setPost(findPost);
    }
    if (!findPost) {
      handeGetPostById(postId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Typography variant="h3" className={classes.pagetitle}>
            Post
          </Typography>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2" className={classes.title}>
                {post.title}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.body}
              >
                {post.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleGoBack}>
                Go back
              </Button>
              {isSignedIn ? (
                <React.Fragment>
                  <GeneralButton
                    color="primary"
                    type="edit"
                    to={{ pathname: `/edit/${post.id}`, post }}
                  />
                  <AlertDialog
                    color="secondary"
                    type="delete"
                    id={post.id}
                    back={true}
                  />
                </React.Fragment>
              ) : (
                <></>
              )}
            </CardActions>
          </Card>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Post;
