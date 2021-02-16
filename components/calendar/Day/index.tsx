import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { MonthStore } from "../../../states/monthStore";
import { InjectStoreState } from "pullstate";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

interface IProps {
  day: string;
}

export const ReminderByDayList = ({ day }: IProps) => {
  const todayReminders = MonthStore.useState((s) => s[day].reminders);
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense>
      <ListItem button>
        <ListItemText primary={day} />
      </ListItem>
      {todayReminders &&
        todayReminders.map((reminder) => {
          const labelId = `checkbox-list-secondary-label-${reminder.id}`;
          return (
            <ListItem key={reminder.id} button>
              <ListItemText id={labelId} primary={reminder.text} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
    </List>
  );
};
