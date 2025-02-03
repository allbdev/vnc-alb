import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@radix-ui/themes/styles.css";
import { ThemeContextProvider } from "@/providers/theme";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { LocaleContextProvider } from "@/providers/locale";
import { Locale } from "../i18n/config";
import { getUserLocale } from "@/services/locale";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
  return (
    <html lang={locale}>
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
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
