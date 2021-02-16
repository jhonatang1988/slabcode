import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CitySelect } from "./CitySelect";
import { DateTimePickerCalendar } from "./DateTimePickerCalendar";
import { ReminderTextBox } from "./Text_box";
import { ColorPickerCalendar } from "./ColorPickerCalendar";
import { SaveReminder } from "./SaveIcon";
import {
  ReminderStore,
  IReminderStore,
  WeatherNotation,
} from "../../../states/reminderStore";
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";
import { MonthStore } from "../../../states/monthStore";

export const NewReminder = () => {
  const reminderTextCandidate = ReminderStore.useState((s) => s.text);
  const reminderCityCandidate = ReminderStore.useState((s) => s.city);
  const reminderDateCandidate = ReminderStore.useState((s) => s.date);
  const reminderColorCandidate = ReminderStore.useState((s) => s.reminderColor);
  const reminderWeatherCandidate = ReminderStore.useState((s) => s.weather);
  const reminderWeatherMetricCandidate = ReminderStore.useState(
    (s) => s.weatherMetric
  );
  const reminderDialogOpen = ReminderStore.useState((s) => s.open);

  const reminderDayCandidate = reminderDateCandidate.getDate();

  const [textReminderValidation, setTextReminderValidation] = React.useState(
    "none"
  );
  const [cityReminderValidation, setCityReminderValidation] = React.useState(
    "none"
  );

  const handleSaveReminder = () => {
    let validated = false;
    if (reminderTextCandidate === "") {
      setTextReminderValidation("inline");
      validated = false;
    } else {
      setTextReminderValidation("none");
      validated = true;
    }

    if (reminderCityCandidate.id === 0) {
      setCityReminderValidation("inline");
      validated = false;
    } else {
      setCityReminderValidation("none");
      validated = true;
    }

    if (validated) {
      const reminderIdCandidate = new Date().getTime();
      MonthStore.update((s) => {
        s[reminderDayCandidate.toString()].reminders.push({
          id: reminderIdCandidate,
          text: reminderTextCandidate,
          city: reminderCityCandidate,
          date: reminderDateCandidate,
          reminderColor: reminderColorCandidate,
          weather: reminderWeatherCandidate,
          weatherMetric: reminderWeatherMetricCandidate,
          open: false,
        });
      });
      console.log("reminder guardado");
    }
  };

  const handleCloseDialog = () => {
    ReminderStore.update((s) => {
      (s.id = new Date().getTime()),
        (s.text = ""),
        (s.city = {
          id: 0,
          name: "",
          state: "",
          country: "",
          coord: {
            lon: 0,
            lat: 0,
          },
        }),
        (s.date = new Date()),
        (s.reminderColor = "red"),
        (s.weather = 0),
        (s.weatherMetric = WeatherNotation.C),
        (s.open = false);
    });
  };

  return (
    <div>
      <Dialog
        open={reminderDialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Reminder</DialogTitle>
        <DialogContent>
          <Box component="div" display={textReminderValidation}>
            <Alert severity="error">Please fill a reminder</Alert>
          </Box>
          <ReminderTextBox />
          <Box component="div" display={cityReminderValidation}>
            <Alert severity="error">Please select a city</Alert>
          </Box>
          <CitySelect />
          <DateTimePickerCalendar />
          <ColorPickerCalendar />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveReminder} color="primary">
            <SaveReminder />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
