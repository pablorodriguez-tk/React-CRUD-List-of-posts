import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function PaginationLink({ paginate, currentPage }) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={10}
        page={currentPage}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
}

export default PaginationLink;
