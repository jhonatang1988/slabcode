import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  ReminderStore,
  IReminderStore,
} from "../../../../states/reminderStore";
import { CHARACTER_LIMIT } from "../../../../contants";

function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  ReminderStore.update((s: IReminderStore) => {
    s.text = event.currentTarget.value;
  });
}

export const ReminderTextBox = () => {
  const reminderTextCandidate = ReminderStore.useState((s) => s.text);
  return (
    <TextField
      id="outlined-basic"
      label="Remember me..."
      variant="outlined"
      onChange={handleInputChange}
      fullWidth
      style={{ marginBottom: 24 }}
      value={reminderTextCandidate}
      inputProps={{
        maxLength: CHARACTER_LIMIT,
      }}
    />
  );
};
