"use client";

import useSWR from "swr";

const key = "dungeon-options";

export type TOptions = {
  hideGuide: boolean;
  showNames: boolean;
  showDifficulty: boolean;
  hideCompleted: boolean;
  sortBy: "difficulty" | "fame" | "name" | "type";
  completedList: string[];
};

const initialValue: TOptions = {
  hideGuide: false,
  showNames: true,
  showDifficulty: true,
  hideCompleted: true,
  sortBy: "type",
  completedList: [],
};

export const useDungeonOptions = () => {
  const fetcher = async () => {
    return new Promise<TOptions>((res) => {
      const data = window.localStorage.getItem(key);
      if (data) {
        res(JSON.parse(data));
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      }
      res(initialValue);
    });
  };

  const { data, isLoading, mutate } = useSWR<TOptions>(key, fetcher);

  const setOptions = (value: (currentData: TOptions) => TOptions) => {
    mutate((currentData) => {
      const newValue = value(currentData as TOptions);
      localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    }, false);
  };

  return { options: data || initialValue, isLoading, setOptions };
};
