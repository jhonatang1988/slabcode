import { Store } from "pullstate";

interface IReminderStore {
  text: string;
  city: CityType;
  date: Date;
  color: string;
  delete: boolean;
  weather: number;
  weatherMetric: WeatherNotation;
}

enum WeatherNotation {
  F = "Fahrenheit",
  C = "Celsius",
  K = "Kelvin",
}

interface CoordinateType {
  lon: number;
  lat: number;
}

export interface CityType {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: CoordinateType;
}

export const ReminderStore = new Store<IReminderStore>({
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
  color: "red",
  delete: false,
  weather: 0,
  weatherMetric: WeatherNotation.C,
});
