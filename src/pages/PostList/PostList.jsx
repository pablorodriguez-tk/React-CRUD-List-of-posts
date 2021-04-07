import React from "react";
import { Link } from "react-router-dom";
import GeneralButton from "../../components/Buttons";
import { useAppContext } from "../../AppContext";
import FolderIcon from "@material-ui/icons/Folder";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Grid,
  Typography,
  Divider,
  ListItemSecondaryAction,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    width: "100%",
  },
  spinner: {
    top: 100,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(12, 2, 2),
  },
  text: {
    maxWidth: "85%",
  },
}));

const PostList = () => {
  const classes = useStyles();
  const { posts, setPosts } = useAppContext();

  const PostDeleteOnClick = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  const confirmDelete = (id) => {
    if (window.confirm("Are you Sure?")) {
      PostDeleteOnClick(id);
    }
  };

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          Posts List
        </Typography>
        <div className={classes.demo}>
          <List>
            {posts.map((post) => (
              <React.Fragment key={post.id}>
                <ListItem
                  button
                  className={classes.text}
                  component={Link}
                  to={`/post/${post.id}`}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={post.title} />
                  <ListItemSecondaryAction>
                    <GeneralButton
                      color="primary"
                      type="edit"
                      to={`/edit/${post.id}`}
                    />
                    <GeneralButton
                      color="secondary"
                      type="delete"
                      onClick={() => confirmDelete(post.id)}
                    />
                  </ListItemSecondaryAction>
                </ListItem>

                <Divider />
              </React.Fragment>
            ))}
          </List>
        </div>
      </Grid>
      )
    </React.Fragment>
  );
};

export default PostList;
