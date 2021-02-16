import { Store } from "pullstate";

export interface IReminderStore {
  id: number;
  text: string;
  city: CityType;
  date: Date;
  reminderColor: string;
  weather: number;
  weatherMetric: WeatherNotation;
  open: boolean;
}

export enum WeatherNotation {
  F = "Fahrenheit",
  C = "Celsius",
  K = "Kelvin",
}

interface CoordinateType {
  lon: number;
  lat: number;
}

export interface CityType {
  readonly id: number;
  name: string;
  state: string;
  country: string;
  coord: CoordinateType;
}

export const ReminderStore = new Store<IReminderStore>({
  id: new Date().getTime(),
  text: "",
  city: {
    id: 0,
    name: "",
    state: "",
    country: "",
    coord: {
      lon: 0,
      lat: 0,
    },
  },
  date: new Date(),
  reminderColor: "red",
  weather: 0,
  weatherMetric: WeatherNotation.C,
  open: false,
});
