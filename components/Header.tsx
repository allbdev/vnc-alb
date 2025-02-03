"use client";
import { useLocale } from "@/providers/locale";
import { useTheme } from "@/providers/theme";
import { useTranslations } from "next-intl";
import React, { FC } from "react";
import { LuLanguages } from "react-icons/lu";

export const Header: FC = () => {
  const { theme, handleToggleTheme } = useTheme();
  const { hangleToggleLocale } = useLocale();
  const t = useTranslations("HomePage");

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
        <button onClick={hangleToggleLocale}>
          <LuLanguages />
        </button>
      </div>
      <nav className="flex flex-1 justify-end">
        <ul className="flex list-none flex-row gap-4">
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>PROJECTS</li>
          <li>TECNOLOGIES</li>
        </ul>
      </nav>
    </header>
  );
};
