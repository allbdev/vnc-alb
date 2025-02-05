"use client";
import { cn, INCO_SIZE } from "@/lib/utils";
import { useLocale } from "@/providers/locale";
import { useTheme } from "@/providers/theme";
import { Tooltip } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { FC, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { LuLanguages } from "react-icons/lu";
import { SlMenu } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";

export const Header: FC = () => {
  return (
    <>
      <header className="hidden flex-row justify-between pt-3 md:flex">
        <div className="flex gap-10">
          <BasedText />
          <EmailButton />
          <ThemeButton />
          <LocaleButton />
        </div>
        <NavList isMobile={false} />
      </header>
      <MobileHeader />
    </>
  );
};

const MobileHeader: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col md:hidden">
      <header className="flex flex-row justify-between pt-3">
        <div className="flex gap-10">
          <ThemeButton />
          <LocaleButton />
        </div>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <TfiClose size={INCO_SIZE} /> : <SlMenu size={INCO_SIZE} />}
        </button>
      </header>
      <div
        className={cn(
          "mt-4 flex-col item-center gap-4",
          isOpen ? "flex" : "hidden",
        )}
      >
        <BasedText className="text-center" />
        <EmailButton className="text-center" />
        <NavList isMobile />
      </div>
    </div>
  );
};

const BasedText: FC<{ className?: string }> = ({ className }) => {
  const t = useTranslations("header");

  return (
    <span className={cn("block", className)} data-testid="based-span">
      {t.rich("based", {
        br: () => <br />,
      })}
    </span>
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

const EmailButton: FC<{ className?: string }> = ({ className }) => {
  const t = useTranslations("header");
  return (
    <button onClick={() => window.open("mailto:alb.develloper@gmail.com")}>
      <span className={cn("block text-left", className)}>
        {t.rich("email", {
          br: () => <br />,
        })}
      </span>
    </button>
  );
};

const NavList: FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const t = useTranslations("header");
  const liClassName = cn(isMobile && "text-center py-2");
  return (
    <nav className={cn(!isMobile && "flex flex-1 justify-end")}>
      <ul
        className={cn(
          "flex list-none",
          !isMobile ? "flex-row items-center gap-4" : "flex-col divide-y",
        )}
      >
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
      </ul>
    </nav>
  );
};
