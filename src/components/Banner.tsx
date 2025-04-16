import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Image } from "@/src/components/Image";
import { Button } from "@/src/components/Button";
import { email } from "@/src/utils";

export const Banner = () => {
  const t = useTranslations("banner");
  return (
    <section className="relative flex h-screen w-full">
      <div className="z-[2] flex size-full flex-col justify-end p-14 text-[3rem] md:w-1/2">
        <span className="text-xl text-red-600">{t.rich("title")}</span>
        <h1>{t.rich("description")}</h1>
        <div className="mt-4 flex gap-4">
          <Button variant="secondary">{t.rich("button1")}</Button>
          <Link href={`mailto:${email}`}>
            <Button variant="primary">{t.rich("button2")}</Button>
          </Link>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-[1] size-full md:w-1/2">
        <Image
          imageProps={{
            src: "/test.jpeg",
            alt: "Banner",
            className: "grayscale-50",
          }}
          aspecRatioProps={{ ratio: 1, className: "pb-[100vh]" }}
        />
      </div>
    </section>
  );
};
