import React from "react";
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
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FolderIcon from "@material-ui/icons/Folder";
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
  const { posts } = useAppContext();

  // React router con link
  /* <ListItem component={props => <Link {...props} to="/about" />}>
  // ...
</ListItem> */

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
                <ListItem button onClick={() => alert("VER")}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={post.title} />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <EditIcon
                        color="primary"
                        fontSize="medium"
                        aria-label="edit"
                        onClick={() => {
                          alert("EDITAR");
                        }}
                      />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon
                        color="secondary"
                        fontSize="medium"
                        aria-label="delete"
                        onClick={() => {
                          alert("BORRAR");
                        }}
                      />
                    </IconButton>
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
