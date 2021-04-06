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
} from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import FloatingButton from "../../components/Buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const PostsList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Posts List
          </Typography>
          <div className={classes.demo}>
            <List>
              {generate(
                <React.Fragment>
                  <ListItem hover={true}>
                    <ListItemAvatar>
                      <Avatar>
                        <Divider />
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Single-line item" />
                    <FloatingButton color="primary" size="small" type="edit" />
                    <FloatingButton
                      color="secondary"
                      size="small"
                      type="delete"
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostsList;
