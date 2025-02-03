"use client";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/src/i18n/config";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface LocaleContextProps {
  locale: Locale;
  hangleToggleLocale: VoidFunction;
}

const LocaleContext = createContext<LocaleContextProps>(
  {} as LocaleContextProps,
);

const LocaleContextProvider: FC<
  PropsWithChildren & { defaultLocale: Locale }
> = ({ children, defaultLocale }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const hangleToggleLocale = useCallback(() => {
    setLocale((prev) => {
      if (prev === "pt") {
        return "en";
      }
      return "pt";
    });
  }, []);

  useEffect(() => {
    setUserLocale(locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, hangleToggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

const useLocale = () => {
  return useContext(LocaleContext);
};

export { LocaleContextProvider, useLocale };
