import { en } from "./en";
import { ru } from "./ru";
export interface Translation {
  common: {
    logo: string;
    limit: string;
    limitTitles: string;
  };
  footer: {
    description: string;
    copyright: () => string;
  };
}

export const dictionaries = {
  ru,
  en,
};
export type Lang = keyof typeof dictionaries;
