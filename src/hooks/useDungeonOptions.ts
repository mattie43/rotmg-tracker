"use client";

import useSWR from "swr";

const key = "dungeon-options";

export type TOptions = {
  showNames: boolean;
  showDifficulty: boolean;
  showCompleted: boolean;
  sortBy: "difficulty" | "fame" | "name" | "type";
  completedList: string[];
};

const initialValue: TOptions = {
  showNames: true,
  showDifficulty: true,
  showCompleted: true,
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
