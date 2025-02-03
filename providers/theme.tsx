"use client";
import { Theme } from "@radix-ui/themes";
import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

type ThemeProps = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeProps;
  setTheme: Dispatch<SetStateAction<ThemeProps>>;
  handleToggleTheme: VoidFunction;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>("dark");

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      }
      return "light";
    });
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleToggleTheme }}>
      <Theme appearance={theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeContextProvider, useTheme };
