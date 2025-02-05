import { LocaleContextProvider } from "@/providers/locale";
import { ThemeContextProvider } from "@/providers/theme";
import { NextIntlClientProvider } from "next-intl";
import React, { FC, PropsWithChildren } from "react";

export const Render: FC<PropsWithChildren> = ({ children }) => {
  const messages = require(`../../messages/en.json`);

  return (
    <ThemeContextProvider>
      <NextIntlClientProvider locale="en" messages={messages}>
        <LocaleContextProvider defaultLocale={"en"}>
          {children}
        </LocaleContextProvider>
      </NextIntlClientProvider>
    </ThemeContextProvider>
  );
};
