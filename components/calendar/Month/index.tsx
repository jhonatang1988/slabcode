import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import { ReminderByDayList } from "../Day";
import { createMonth } from "../../../helpers";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import { NewReminder } from "../NewReminder";
import { ReminderStore } from "../../../states/reminderStore";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fabBottom: {
      margin: theme.spacing(1),
      position: "fixed",
      bottom: theme.spacing(6),
      right: theme.spacing(6),
      zIndex: 1000,
    },
    gridTile: {
      borderStyle: "groove",
      overflow: "scroll",
    },
  })
);
interface IProps {
  width: "xs" | "sm" | "md" | "lg" | "xl";
}

const MonthGrid = ({ width }: IProps) => {
  const classes = useStyles();
  const openReminderDialog = () => {
    ReminderStore.update((s) => {
      s.open = true;
    });
  };

  const getGridListCols = () => {
    if (isWidthUp("lg", width)) {
      return 4;
    }

    if (isWidthUp("md", width)) {
      return 3;
    }

    if (isWidthUp("sm", width)) {
      return 2;
    }

    return 1;
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={170} cols={getGridListCols()}>
        <GridListTile key="Subheader" cols={7} style={{ height: "auto" }}>
          <ListSubheader component="div">
            <h2>{new Date().toLocaleString("default", { month: "long" })}</h2>
          </ListSubheader>
        </GridListTile>
        {createMonth().map((day) => (
          <GridListTile key={day} className={classes.gridTile}>
            <ReminderByDayList day={day.toString()} />
          </GridListTile>
        ))}
      </GridList>
      <NewReminder />
      <Fab
        className={classes.fabBottom}
        color="primary"
        aria-label="add"
        onClick={openReminderDialog}
        // disabled={this.state.showAdd}
      >
        <Tooltip title={"Add new reminder"}>
          <AddIcon color="inherit" />
        </Tooltip>
      </Fab>
    </div>
  );
};

export default withWidth()(MonthGrid);
