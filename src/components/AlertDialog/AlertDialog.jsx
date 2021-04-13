import React from "react";
import GeneralButton from "../Buttons";
import { useAppContext } from "../../AppContext";
import { deletePosts } from "../../api/jsonplaceholder";
import { useHistory } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const AlertDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const { posts, setPosts, setLoading } = useAppContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = async () => {
    setLoading(true);
    setOpen(false);
    await deletePosts(props.id);
    setPosts(posts.filter((item) => item.id !== props.id));
    if (props.back === true) {
      history.push("/");
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <GeneralButton
        color={props.color}
        type={props.type}
        onClick={handleClickOpen}
        to={props.to}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm DELETE Action"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You sure to permanently delete post {props.id}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AlertDialog;
