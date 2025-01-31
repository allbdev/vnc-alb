"use client";
import { useTheme } from "@/providers";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/src/i18n/config";
import { useTranslations } from "next-intl";
import React, { FC, useCallback } from "react";

export const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("HomePage");

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      }
      return "light";
    });
  }, [setTheme]);

  const hangleChangeLang = (locale: Locale) => {
    setUserLocale(locale);
  };

  return (
    <header className="flex flex-row justify-between pt-3">
      <div className="flex gap-10">
        <span className="block">
          {t.rich("based", {
            br: () => <br />,
          })}
        </span>
        <span className="block">
          {t.rich("email", {
            br: () => <br />,
          })}
        </span>
        <button onClick={handleToggleTheme}>
          <span className="block text-left">
            {t.rich("switchMode", {
              mode: theme === "dark" ? "Light" : "Dark",
              br: () => <br />,
            })}
          </span>
        </button>
        <button onClick={() => hangleChangeLang("pt")}>pt</button>
        <button onClick={() => hangleChangeLang("en")}>en</button>
      </div>
      <nav className="flex flex-1 justify-end">
        <ul className="flex list-none flex-row gap-4">
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};
