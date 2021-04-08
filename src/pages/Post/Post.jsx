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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  const { postId } = useParams();
  const { posts } = useAppContext();
  const [post, setPost] = useState();
  const classes = useStyles();

  useEffect(() => {
    // const findPost = posts.find(({ id }) => id == postId);

    // if (findPost) return setPost(findPost);

    const getPostId = async (props) => {
      const response = await getPostById(postId);

      // response.hasError ? "hay un error" : setPost(response.post);
    };
    getPostId();
    // if (!findPost) {
    //   const response = getPostById(postId);
    console.log(post);
    // }
  }, [postId]);

  return (
    <React.Fragment>
      <Typography variant="h3" className={classes.pagetitle}>
        Post
      </Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            {/* {post.title} */}
          </Typography>
          <Typography variant="body2" component="p" className={classes.body}>
            {/* {post.body} */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Go back</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Post;
