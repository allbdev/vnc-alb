import React from "react";
import { Button } from "@/components/ui/button";
import {useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <Button>
      {t("title")}
    </Button>
  );
} 