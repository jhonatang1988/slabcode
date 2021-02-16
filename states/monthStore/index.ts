import { Store } from "pullstate";
import { IReminderStore } from "../reminderStore";
interface IMonth {
  [index: string]: { reminders: IReminderStore[] };
}
import { createMonth } from "../../helpers";

const createEmptyDays = () => {
  const emptyMonth: IMonth = {};
  createMonth().map((day) => {
    emptyMonth[day.toString()] = {
      reminders: [],
    };
  });

  return emptyMonth;
};

export const MonthStore = new Store<IMonth>(createEmptyDays());
