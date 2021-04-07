import React, { useEffect, useState } from "react";
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
} from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import FloatingButton from "../../components/Buttons";
import { getPosts } from "../../api/jsonplaceholder";
import Spinner from "../../components/Spinner";
import { useAppContext } from "../../AppContext";

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
}));

const PostList = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { posts } = useAppContext();

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner className={classes.spinner} />
      ) : (
        <Grid className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Posts List
          </Typography>
          <div className={classes.demo}>
            <List>
              {posts.map((post) => (
                <React.Fragment key={post.id}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={post.title} />
                    <FloatingButton color="primary" size="small" type="edit" />
                    <FloatingButton
                      color="secondary"
                      size="small"
                      type="delete"
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </div>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default PostList;
