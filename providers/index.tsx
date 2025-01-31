"use client";
import { Theme } from "@radix-ui/themes";
import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ThemeProps = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeProps;
  setTheme: Dispatch<SetStateAction<ThemeProps>>;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Theme appearance={theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeContextProvider, useTheme };
