import React from "react";
import { NewsArticle } from "@/api/data-structures";
import ArticleDuration from "./ArticleDuration";
import Date from "./Date";
import ArticleCategoryTag from "./ArticleCategoryTag";
import Link from "next/link";
import LinkButton from "./LinkButton";

interface BigArticleProps {
  newsArticle?: NewsArticle;
}

const BigArticle: React.FC<BigArticleProps> = ({ newsArticle }) => {
  if (!newsArticle) {
    return (
      <article className="flex flex-col gap-2">
        <div className="h-[18rem] rounded-xl animate-pulse bg-gray-600" />
        <div className="h-[2rem] w-3/4 rounded-xl animate-pulse bg-gray-600"></div>
        <div className="h-[3rem] rounded-xl animate-pulse bg-gray-600"></div>
        <div className="h-[2rem] w-1/4 rounded-xl animate-pulse bg-gray-600"></div>
        <div className="flex flex-row gap-3 flex-wrap">
          {[1, 2, 3].map((_) => (
            <div
              key={_}
              className="h-[2rem] w-1/4 rounded-xl animate-pulse bg-gray-600"
            />
          ))}
        </div>
      </article>
    );
  }

  const { id, title, content, imageUrl, publishDateStr, minRead, categories } =
    newsArticle;

  const CONTENT_PREVIEW_LENGTH = 145;
  const REDIREDT_URL = `${process.env.NEXT_PUBLIC_URL}/article/${id}`;

  return (
    <article className="flex flex-col gap-2">
      <Link href={REDIREDT_URL}>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="h-[18rem] bg-cover bg-center bg-no-repeat rounded-3xl"
        />
      </Link>
      <Link href={REDIREDT_URL} className="text-4xl font-black hover:underline">
        {title}
      </Link>
      <p>{content.slice(0, CONTENT_PREVIEW_LENGTH)}...</p>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-row gap-6 flex-wrap">
          <Date dateString={publishDateStr} />
          <ArticleDuration durationMinutes={minRead} />
        </div>
        <LinkButton href={REDIREDT_URL} />
      </div>
      <div className="flex flex-row gap-3 pt-3 flex-wrap">
        {categories.map((cat) => (
          <ArticleCategoryTag key={cat.id} category={cat} />
        ))}
      </div>
    </article>
  );
};

export default BigArticle;
