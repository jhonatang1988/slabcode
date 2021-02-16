import { Store } from "pullstate";

export interface IValidationStore {
  text: boolean;
  city: boolean;
  date: boolean;
  reminderColor: boolean;
  delete: boolean;
  weather: boolean;
  weatherMetric: boolean;
}

export const ValidationStore = new Store<IValidationStore>({
  text: false,
  city: false,
  date: false,
  reminderColor: false,
  delete: false,
  weather: false,
  weatherMetric: false,
});
