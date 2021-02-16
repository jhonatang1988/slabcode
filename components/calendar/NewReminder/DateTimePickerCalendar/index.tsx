import React from "react";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { ReminderStore } from "../../../../states/reminderStore";

export const DateTimePickerCalendar = () => {
  const date = ReminderStore.useState((s) => s.date);
  const handleDateChange = (newDate: Date) => {
    ReminderStore.update((s) => {
      s.date = newDate;
    });
  };
  // const [selectedDate, handleDateChange] = useState<Date | null>(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        value={date}
        onChange={(newDate) =>
          newDate ? handleDateChange(newDate.toDate()) : null
        }
        minDate={new Date()}
        style={{ width: 300, marginBottom: 24 }}
      />
    </MuiPickersUtilsProvider>
  );
};
