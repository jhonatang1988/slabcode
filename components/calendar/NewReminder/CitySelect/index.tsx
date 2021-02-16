// json city example from openwheatermap
// {
//     "id": 833,
//     "name": "Ḩeşār-e Sefīd",
//     "state": "",
//     "country": "IR",
//     "coord": {
//         "lon": 47.159401,
//         "lat": 34.330502
//     }
// },

/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import colombianCities from "../../../../colombia.city.list.json";
import { ReminderStore, CityType } from "../../../../states/reminderStore";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export const CitySelect = () => {
  const handleChangeCity = (
    _event: React.ChangeEvent<{}>,
    value: CityType | null
  ) => {
    value
      ? ReminderStore.update((s) => {
          s.city = value;
        })
      : null;
  };
  const classes = useStyles();

  return (
    <Autocomplete
      id="city-select-calendar"
      style={{ width: 300 }}
      options={colombianCities as CityType[]}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => <React.Fragment>{option.name}</React.Fragment>}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select a city"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disables autocomplete and autofill
          }}
        />
      )}
      onChange={(event, value) => handleChangeCity(event, value)}
    />
  );
};