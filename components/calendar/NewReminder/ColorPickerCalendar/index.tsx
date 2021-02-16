import React, { useState } from "react";
import { Color, ColorPicker } from "material-ui-color";
import { ReminderStore } from "../../../../states/reminderStore";

export const ColorPickerCalendar = () => {
  const color = ReminderStore.useState((s) => s.color);
  // const [color, setColor] = useState("red");
  const handleColorChange = (newValue: Color) => {
    ReminderStore.update((s) => {
      s.color = `#${newValue.hex}`;
    });
  };
  return (
    <ColorPicker value={color} onChange={handleColorChange} hideTextfield />
  );
};
