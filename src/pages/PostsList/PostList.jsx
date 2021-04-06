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
    maxWidth: 1000,
    width: "100%",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(12, 2, 2),
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
    <Grid className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Posts List
      </Typography>
      <div className={classes.demo}>
        <List>
          {generate(
            <React.Fragment>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Divider />
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Este es un simple texto de prueba, para ver como se comporta la app al ser un texto largo" />
                <FloatingButton color="primary" size="small" type="edit" />
                <FloatingButton color="secondary" size="small" type="delete" />
              </ListItem>
              <Divider />
            </React.Fragment>
          )}
        </List>
      </div>
    </Grid>
  );
};

export default PostsList;
