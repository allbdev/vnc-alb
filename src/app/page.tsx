import React from "react";
import { useTranslations } from "next-intl";
import { Image } from "@/components/Image";
import { Button } from "@radix-ui/themes";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <Button>{t("title")}</Button>
      <Image
        aspecRatioProps={{ ratio: 16 / 9 }}
        imageProps={{
          alt: "Landscape photograph by Tobias Tullius",
          src: "/test.jpeg",
        }}
      />
    </main>
  );
}
