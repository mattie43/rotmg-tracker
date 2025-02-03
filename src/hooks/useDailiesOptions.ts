"use client";

import useSWR from "swr";

const key = "dailies-options";

export type TDailyOptions = {
  dailyQuests: string[];
  dailyDungeons: string[];
};

const initialValue: TDailyOptions = {
  dailyQuests: [],
  dailyDungeons: [],
};

export const useDailiesOptions = () => {
  const fetcher = async () => {
    return new Promise<TDailyOptions>((res) => {
      const data = window.localStorage.getItem(key);
      if (data) {
        res(JSON.parse(data));
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      }
      res(initialValue);
    });
  };

  const { data, isLoading, mutate } = useSWR<TDailyOptions>(key, fetcher);

  const setOptions = (value: (currentData: TDailyOptions) => TDailyOptions) => {
    mutate((currentData) => {
      const newValue = value(currentData as TDailyOptions);
      localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    }, false);
  };

  return { options: data || initialValue, isLoading, setOptions };
};
