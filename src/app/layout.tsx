import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@radix-ui/themes/styles.css";
import { ThemeContextProvider } from "@/providers/theme";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { LocaleContextProvider } from "@/providers/locale";
import { Locale } from "../i18n/config";
import { getUserLocale } from "@/services/locale";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
});

export const metadata: Metadata = {
  title: "Vinicius Albuquerque",
  description:
    "Hello there, my name is Vinicius and I am the frontend engineer that you are looking for",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getUserLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  console.log(ubuntu.variable, ubuntuMono.variable);
  return (
    <html lang={locale}>
      <body className={cn(ubuntu.variable, ubuntuMono.variable, "antialiased")}>
        <ThemeContextProvider>
          <NextIntlClientProvider messages={messages}>
            <LocaleContextProvider defaultLocale={locale as Locale}>
              {children}
            </LocaleContextProvider>
          </NextIntlClientProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
