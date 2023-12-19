import React from "react";
import { NewsArticle } from "@/api/data-structures";
import ArticleDuration from "./ArticleDuration";
import Date from "./Date";
import ArticleCategoryTag from "./ArticleCategoryTag";
import Link from "next/link";

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

  const { id, title, content, imageUrl, publishDateStr, minRead, tags } =
    newsArticle;
  const CONTENT_PREVIEW_LENGTH = 145;

  return (
    <article className="flex flex-col gap-2">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="h-[18rem] bg-cover bg-center bg-no-repeat rounded-3xl"
      />
      <Link href="/" className="text-4xl font-black hover:underline">
        {title}
      </Link>
      <p>{content.slice(0, CONTENT_PREVIEW_LENGTH)}...</p>
      <div className="flex flex-row justify-between flex-wrap gap-4">
        <div className="flex flex-row gap-6">
          <Date dateString={publishDateStr} />
          <ArticleDuration durationMinutes={minRead} />
        </div>
        <div className="flex flex-row shrink-0">
          <button className="hover:opacity-50">
            <img src="/link.svg" alt="link" />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-3 pt-3 flex-wrap">
        {tags.map((tag) => (
          <ArticleCategoryTag key={tag} category={tag} />
        ))}
      </div>
    </article>
  );
};

export default BigArticle;
