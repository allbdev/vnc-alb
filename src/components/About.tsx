import React, { FC, PropsWithChildren, ReactNode } from "react";
import { useTranslations } from "next-intl";

export const About: FC = () => {
  const t = useTranslations("about");
  return (
    <section className="mx-auto min-h-screen w-[1350px] max-w-full">
      <h2 className="pt-6 text-[3.5rem] font-bold">{t("title")}</h2>
      <div className="mt-6 text-[1.5rem] leading-10">
        {t.rich("description", {
          br: () => <br />,
        })}
      </div>
      <div className="mt-6 grid grid-cols-[minmax(200px,_1fr)_minmax(200px,_1fr)_minmax(200px,_1fr)] gap-20 pb-10">
        <Experience />
        <Education />
        <Skills />
      </div>
    </section>
  );
};

const Article: FC<PropsWithChildren> = ({ children }) => {
  return <article className="flex flex-col gap-2">{children}</article>;
};

const ArticleTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h3 className="mb-2 text-2xl font-bold">{children}</h3>;
};

const ArticleContent: FC<{ title: ReactNode; content: ReactNode }> = ({
  title,
  content,
}) => {
  return (
    <p className="text-lg">
      {title}
      <br />
      <span className="text-base text-gray-500">{content}</span>
    </p>
  );
};

const Experience: FC = () => {
  const t = useTranslations("about");
  const keys = ["description", "description2", "description3"];

  return (
    <Article>
      <ArticleTitle>{t("experience.title")}</ArticleTitle>
      {keys.map((key) => (
        <ArticleContent
          key={key}
          title={t(`experience.${key}.position`)}
          content={
            <>
              {t(`experience.${key}.company`)}
              {" | "}
              {t(`experience.${key}.period`)}
            </>
          }
        />
      ))}
    </Article>
  );
};

const Education: FC = () => {
  const t = useTranslations("about");
  const keys = ["description", "description2", "description3", "description4"];

  return (
    <Article>
      <ArticleTitle>{t("education.title")}</ArticleTitle>
      {keys.map((key) => (
        <ArticleContent
          key={key}
          title={t(`education.${key}.degree`)}
          content={
            <>
              {t(`education.${key}.university`)}
              {" | "}
              {t(`education.${key}.period`)}
            </>
          }
        />
      ))}
    </Article>
  );
};

const Skills: FC = () => {
  const t = useTranslations("about");
  const keys = [
    "description",
    "description2",
    "description3",
    "description4",
    "description5",
    "description6",
  ];

  return (
    <Article>
      <ArticleTitle>{t("skills.title")}</ArticleTitle>
      {keys.map((key) => (
        <span key={key} className="text-lg">
          {t(`skills.${key}`)}
        </span>
      ))}
    </Article>
  );
};
