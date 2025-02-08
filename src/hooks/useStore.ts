"use client";

import useSWR from "swr";

export type TStore = {
  showDungeonGuide: boolean;
  showDungeonNames: boolean;
  showDungeonDifficulty: boolean;
  hideCompletedDungeons: boolean;
  sortDungeonsBy: "type" | "name" | "difficulty" | "fame";
  completedDungeons: string[];
};

const KEY = "rotmg-tracker-store";

const defaultStore: TStore = {
  showDungeonGuide: true,
  showDungeonNames: true,
  showDungeonDifficulty: true,
  hideCompletedDungeons: false,
  sortDungeonsBy: "type",
  completedDungeons: [],
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

  const updatePageGuide = (show: boolean) => {
    console.log("updatePageGuide", show);
    mutate((store) => {
      console.log("store", store);
      if (!store) return store;
      const newStore = { ...store };
      newStore.showDungeonGuide = show;
      return newStore;
    });
  };

  return { store: data, setStore, isLoading, updatePageGuide };
};
