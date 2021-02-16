import React, { useState } from "react";
import { Color, ColorPicker } from "material-ui-color";
import {
  ReminderStore,
  IReminderStore,
} from "../../../../states/reminderStore";
import {
  ValidationStore,
  IValidationStore,
} from "../../../../states/validationStore";

export const ColorPickerCalendar = () => {
  const reminderColor = ReminderStore.useState((s) => s.reminderColor);
  const handleColorChange = (newValue: Color) => {
    ReminderStore.update((s) => {
      s.reminderColor = `#${newValue.hex}`;
    });
    ValidationStore.update((s: IValidationStore) => {
      s.reminderColor = true;
    });
  };
  return (
    <div>
      <span>Pick a colour for your reminder:</span>
      <ColorPicker
        value={reminderColor}
        onChange={handleColorChange}
        hideTextfield
      />
    </div>
  );
};
