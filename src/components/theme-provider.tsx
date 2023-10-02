import { getIsDarkScheme, useSettingsStore } from "@/store/settings";
import React, { FC, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}
const ThemeProvider: FC<Props> = ({ children }) => {
  const isDarkTheme = useSettingsStore(getIsDarkScheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return children;
};

export default ThemeProvider;
