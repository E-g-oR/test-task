import { Lang } from "@/translation";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SettingsStore {
  lang: Lang;
  isDarkScheme: boolean;
  setLang: (lang: Lang) => void;
  setColorScheme: (isDarkScheme: boolean) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist<SettingsStore>(
    (set) => ({
      isDarkScheme: true,
      lang: "ru",
      setColorScheme: (isDarkScheme: boolean) => set({ isDarkScheme }),
      setLang: (lang: Lang) => set({ lang }),
    }),
    { name: "settings" }
  )
);

export const getIsDarkScheme = (store: SettingsStore) => store.isDarkScheme,
  getLang = (store: SettingsStore) => store.lang,
  getSetColorScheme = (store: SettingsStore) => store.setColorScheme,
  getSetLang = (store: SettingsStore) => store.setLang;
