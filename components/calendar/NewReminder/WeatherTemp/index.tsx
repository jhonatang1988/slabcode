import { fetcher } from "../../../../helpers";
import { createAsyncAction, errorResult, successResult } from "pullstate";
import { ReminderStore } from "../../../../states/reminderStore";

interface IPropsInput {
  id: number;
}

interface IOutput {
  main: {
    temp: number;
  };
}

const getTempForCityById = createAsyncAction<IPropsInput, IOutput>(
  async ({ id }) => {
    const openWeatherApiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${openWeatherApiKey}`;

    const result = await fetcher(url);

    if (result.main) {
      return successResult(result);
    }

    return errorResult([], `Couldn't get weather temp: ${result.errorMessage}`);
  },
  {
    postActionHook: ({ result }) => {
      if (!result.error) {
        ReminderStore.update((s) => {
          s.weather = result.payload.main.temp;
        });
      }
    },
  }
);

export const WeatherTemp = ({ id }: IPropsInput) => {
  const [finished, result] = getTempForCityById.useBeckon({ id: id });

  if (!finished) {
    return <span>temp?</span>;
  }

  if (result.error) {
    return <span>{result.message}</span>;
  }

  return result && <span>{result.payload.main.temp}</span>;
};
