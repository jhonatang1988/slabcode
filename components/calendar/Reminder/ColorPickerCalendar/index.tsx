import React, { useState } from "react";
import { Color, ColorPicker } from "material-ui-color";

export const ColorPickerCalendar = () => {
  const [color, setColor] = useState("red");
  const handleChange = (newValue: Color) => {
    console.log("change", newValue);
    setColor(`#${newValue.hex}`);
    // action('changed')(newValue);
  };
  return <ColorPicker value={color} onChange={handleChange} hideTextfield />;
};
