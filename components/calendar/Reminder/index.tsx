// <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="outlined-basic" label="Outlined" variant="remider" />
//     </form>

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& > *": {
//         margin: theme.spacing(1),
//         width: "25ch",
//       },
//     },
//   })
// );

import React from "react";
import { CitySelect } from "./CitySelect";
import { DateTimePickerCalendar } from "./DateTimePickerCalendar";
import { DeleteIcon } from "./DeleteIcon";
import { ReminderTextBox } from "./Text_box";
import { ColorPickerCalendar } from "./ColorPickerCalendar";

export const Reminder = () => {
  return (
    <>
      <ReminderTextBox />
      <CitySelect />
      <DateTimePickerCalendar />
      <DeleteIcon />
      <ColorPickerCalendar />
    </>
  );
};
