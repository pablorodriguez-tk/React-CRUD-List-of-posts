import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useAppContext } from "../../AppContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPostById } from "../../api/jsonplaceholder";
import Spinner from "../../components/Spinner";
import { Link, useHistory } from "react-router-dom";
import GeneralButton from "../../components/Buttons";
import AlertDialog from "../../components/AlertDialog";

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
  const { loading, posts, setLoading } = useAppContext();
  const [post, setPost] = useState([]);
  const classes = useStyles();

  const handeGetPostById = async (postId) => {
    setLoading(true);
    const response = await getPostById(postId);
    setPost(response.post);
    setLoading(false);
  };

  useEffect(() => {
    const findPost = posts.find(({ id }) => id == postId);
    if (findPost) {
      setPost(findPost);
    }
    if (!findPost) {
      handeGetPostById(postId);
    }
  }, []);

  const handleClick = () => {
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
              <Button size="small" onClick={handleClick}>
                Go back
              </Button>
              <GeneralButton
                color="primary"
                type="edit"
                to={`/edit/${post.id}`}
              />
              <AlertDialog color="secondary" type="delete" id={post.id} />
            </CardActions>
          </Card>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Post;
