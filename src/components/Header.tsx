"use client";
import { cn, INCO_SIZE } from "@/lib/utils";
import { useLocale } from "@/providers/locale";
import { useTheme } from "@/providers/theme";
import { Tooltip } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { FC, useEffect, useMemo, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { LuLanguages, LuMenu, LuX } from "react-icons/lu";

export const Header: FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <NavList />
    </header>
  );
};

const LocaleButton: FC = () => {
  const { hangleToggleLocale } = useLocale();
  const t = useTranslations("header");

  return (
    <Tooltip content={<span>{t.rich("switchLocale")}</span>}>
      <button onClick={hangleToggleLocale}>
        <LuLanguages size={INCO_SIZE} />
      </button>
    </Tooltip>
  );
};

const ThemeButton: FC = () => {
  const { theme, handleToggleTheme } = useTheme();
  const t = useTranslations("header");

  return (
    <Tooltip
      content={
        <span>
          {t.rich("switchMode", {
            mode: theme === "dark" ? "Light" : "Dark",
          })}
        </span>
      }
    >
      <button onClick={handleToggleTheme}>
        {theme === "dark" ? (
          <IoMdSunny size={INCO_SIZE} />
        ) : (
          <IoMdMoon size={INCO_SIZE} />
        )}
      </button>
    </Tooltip>
  );
};

const NavList: FC = () => {
  const t = useTranslations("header");
  const liClassName = cn("text-center py-2");
  const [isOpen, setIsOpen] = useState(false);

  const mobileClassNames = useMemo(
    () => [
      "z-99 list-none flex-col divide-y top-[100%] absolute left-0 right-0 ease-in md:sticky md:flex md:flex-row md:items-center md:gap-4 md:divide-y-0 bg-black text-white dark:bg-white dark:text-black",
      isOpen ? "flex" : "hidden",
    ],
    [isOpen],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={
        "relative mx-auto flex w-[1020px] max-w-full flex-1 items-center justify-between bg-black text-white *:px-6 *:py-2 dark:bg-white dark:text-black md:mt-3 md:max-w-[90%] md:*:py-1"
      }
    >
      <h1>{t.rich("title")}</h1>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <LuX size={INCO_SIZE} /> : <LuMenu size={INCO_SIZE} />}
      </button>
      <ul className={cn(mobileClassNames)}>
        <li className={liClassName}>
          <Link href={"#about"}>{t.rich("links.1")}</Link>
        </li>
        <li className={liClassName}>
          <Link href={"#experience"}>{t.rich("links.2")}</Link>
        </li>
        <li className={liClassName}>
          <Link href={"#projects"}>{t.rich("links.3")}</Link>
        </li>
        <li className={liClassName}>
          <Link href={"#tecnologies"}>{t.rich("links.4")}</Link>
        </li>
        <li className={cn(liClassName, "flex gap-4 justify-center")}>
          <LocaleButton />
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
};
