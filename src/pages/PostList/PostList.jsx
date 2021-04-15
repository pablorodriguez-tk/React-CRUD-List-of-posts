import React from "react";
import { Link } from "react-router-dom";
import GeneralButton from "../../components/Buttons";
import PaginationLink from "../../components/PaginationLink";
import AlertDialog from "../../components/AlertDialog";
import { useAppContext } from "../../AppContext";
import FolderIcon from "@material-ui/icons/Folder";
import Spinner from "../../components/Spinner";
import { HeroHeader } from "../../components/Header";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Grid,
  Divider,
  ListItemSecondaryAction,
  makeStyles,
  Zoom,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    width: "100%",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  pagination: {
    margin: theme.spacing(2, 2, 2),
    display: "grid",
    justifyItems: "center",
  },
  text: {
    maxWidth: "85%",
  },
}));

const PostList = ({ posts, paginate, currentPage }) => {
  const classes = useStyles();

  const { loading, isSignedIn } = useAppContext();

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Grid className={classes.root}>
            <HeroHeader />
            <Zoom in={true} timeout={500}>
              <div className={classes.demo}>
                <List>
                  {posts.map((post) => (
                    <React.Fragment key={post.id}>
                      <ListItem
                        button
                        className={classes.text}
                        component={Link}
                        to={`/post/${post.id}`}
                        state={post.id}
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <FolderIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={post.title} />
                        {isSignedIn ? (
                          <ListItemSecondaryAction>
                            <GeneralButton
                              color="primary"
                              type="edit"
                              to={{ pathname: `/edit/${post.id}`, post }}
                            />
                            <AlertDialog
                              color="secondary"
                              type="delete"
                              id={post.id}
                              back={false}
                            />
                          </ListItemSecondaryAction>
                        ) : (
                          ""
                        )}
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </Zoom>
            <div className={classes.pagination}>
              <PaginationLink paginate={paginate} currentPage={currentPage} />
            </div>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default PostList;
