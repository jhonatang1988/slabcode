import React, { useState } from "react";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

export const DateTimePickerCalendar = () => {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        value={selectedDate}
        onChange={(newDate) =>
          newDate ? handleDateChange(newDate.toDate()) : null
        }
        minDate={new Date()}
      />
    </MuiPickersUtilsProvider>
  );
};
