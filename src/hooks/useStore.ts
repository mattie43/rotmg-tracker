"use client";

import useSWR from "swr";

export type TStore = {
  showDungeonNames: boolean;
  showDungeonDifficulty: boolean;
  hideCompletedDungeons: boolean;
  sortDungeonsBy: "type" | "name" | "difficulty" | "fame";
  completedDungeons: string[];
  tinkerDailies: string[];
  eventFilters: string[];
};

const KEY = "rotmg-tracker-store";

const defaultStore: TStore = {
  showDungeonNames: true,
  showDungeonDifficulty: true,
  hideCompletedDungeons: false,
  sortDungeonsBy: "type",
  completedDungeons: [],
  tinkerDailies: [],
  eventFilters: [],
};

export const useStore = () => {
  const fetcher = (): TStore => {
    const local = localStorage.getItem(KEY);
    const parsed = local ? JSON.parse(local) : {};

    if (!local) {
      localStorage.setItem(KEY, JSON.stringify(defaultStore));
    }

    return Object.keys(defaultStore).reduce((acc, key) => {
      const typedKey = key as keyof TStore;
      acc[typedKey] = parsed[typedKey] ?? defaultStore[typedKey];
      return acc;
    }, {} as Partial<TStore>) as TStore;
  };

  const { data, isLoading, mutate } = useSWR<TStore | undefined>(KEY, fetcher);

  const setStore = (value: (currentData: TStore) => TStore) => {
    mutate((currentData) => {
      const newValue = value(currentData as TStore);
      localStorage.setItem(KEY, JSON.stringify(newValue));
      return newValue;
    }, false);
  };

  return { store: data, setStore, isLoading };
};
