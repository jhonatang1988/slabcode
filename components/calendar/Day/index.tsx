import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { MonthStore } from "../../../states/monthStore";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { IReminderStore, ReminderStore } from "../../../states/reminderStore";

interface IProps {
  day: string;
}

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

  return (
    <List dense>
      <ListItem button>
        <ListItemText primary={day} />
      </ListItem>
      {todayReminders &&
        todayReminders.map((reminder) => {
          const backGroundColor = reminder.reminderColor;
          const style = {
            color: backGroundColor,
          };
          const labelId = `checkbox-list-secondary-label-${reminder.id}`;
          return (
            <ListItem
              key={reminder.id}
              button
              style={style}
              onClick={() => handleViewReminder(reminder)}
            >
              <ListItemText
                id={labelId}
                primary={`${reminder.text} In: ${reminder.city.name} Temp:`}
              />
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
          );
        })}
    </List>
  );
};
