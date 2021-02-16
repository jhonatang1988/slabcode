import React from "react";
import TextField from "@material-ui/core/TextField";
import { ReminderStore } from "../../../../states/reminderStore";

function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  ReminderStore.update((s) => {
    s.text = event.currentTarget.value;
  });
}

export const ReminderTextBox = () => {
  return (
    <TextField
      id="outlined-basic"
      label="Remember me..."
      variant="outlined"
      onChange={handleInputChange}
    />
  );
};
