import { getLang } from "@/utils";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = getLang();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
