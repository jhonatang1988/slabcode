import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  ReminderStore,
  IReminderStore,
} from "../../../../states/reminderStore";

function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  ReminderStore.update((s: IReminderStore) => {
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
      fullWidth
      style={{ marginBottom: 24 }}
    />
  );
};
