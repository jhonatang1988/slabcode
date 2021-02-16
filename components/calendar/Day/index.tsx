import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { MonthStore } from "../../../states/monthStore";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { IReminderStore, ReminderStore } from "../../../states/reminderStore";
import { WeatherTemp } from "../NewReminder/WeatherTemp";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

interface IProps {
  day: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridTile: {
      overflow: "scroll",
      maxHeight: "-webkit-fill-available",
    },
  })
);

export const ReminderByDayList = ({ day }: IProps) => {
  const todayReminders = MonthStore.useState((s) => s[day].reminders);

  const handleDeleteReminder = (reminder: IReminderStore) => {
    MonthStore.update((s) => {
      const reminders = s[day].reminders;
      reminders.forEach((_reminder, _index) => {
        if (_reminder.id === reminder.id) {
          reminders.splice(_index, 1);
        }
      });
    });
  };

  const handleViewReminder = (reminder: IReminderStore) => {
    ReminderStore.update((s) => {
      s.open = true;
      s.id = reminder.id;
      s.city = reminder.city;
      s.date = reminder.date;
      s.reminderColor = reminder.reminderColor;
      s.text = reminder.text;
      s.weather = reminder.weather;
      s.weatherMetric = reminder.weatherMetric;
    });
  };

  const classes = useStyles();

  return (
    <List dense className={classes.gridTile}>
      <ListItem button>
        <ListItemText primary={day} />
      </ListItem>
      {todayReminders &&
        todayReminders.map((reminder) => {
          const color = reminder.reminderColor;
          const style = {
            color: color,
          };
          const labelId = `checkbox-list-secondary-label-${reminder.id}`;
          return (
            <>
              <ListItem
                key={reminder.id}
                button
                style={style}
                onClick={() => handleViewReminder(reminder)}
              >
                <ListItemText id={labelId}>
                  <div>{`Reminder: ${reminder.text}`}</div>
                  <div>{`Where: ${reminder.city.name}`}</div>
                  <WeatherTemp id={reminder.city.id} />
                  <span>{`° ${reminder.weatherMetric}`}</span>
                  <div>{`Time: ${reminder.date.toLocaleTimeString()}`}</div>
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteReminder(reminder)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </>
          );
        })}
    </List>
  );
};
