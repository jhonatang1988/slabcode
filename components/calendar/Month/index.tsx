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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: "relative",
      minHeight: 200,
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
  })
);

export const MonthGrid = () => {
  const classes = useStyles();
  const openReminderDialog = () => {
    ReminderStore.update((s) => {
      s.open = true;
    });
  };
  return (
    <div>
      <GridList cellHeight={100} cols={7}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {createMonth().map((day) => (
          <GridListTile key={day}>
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
