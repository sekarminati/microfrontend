import { createStyles, makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";

const useStyles = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  });
});

export default () => {
  const clasess = useStyles();

  return (
    <div className={clasess.bar}>
      <LinearProgress />
    </div>
  );
};
