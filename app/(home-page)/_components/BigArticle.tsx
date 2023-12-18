import React from "react";
import { NewsArticle } from "@/api/data-structures";
import ArticleDuration from "./ArticleDuration";
import Date from "./Date";
import ArticleCategoryTag from "./ArticleCategoryTag";

const BigArticle: React.FC<NewsArticle> = ({
  id,
  title,
  content,
  imageUrl,
  publishDateStr,
  minRead,
  tags,
}) => {
  const CONTENT_PREVIEW_LENGTH = 150;

  return (
    <article className="flex flex-col gap-2 w-100">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="h-80 bg-cover bg-center bg-no-repeat rounded-3xl"
      />
      <h2 className="text-4xl font-black">{title}</h2>
      <p>{content.slice(0, CONTENT_PREVIEW_LENGTH)}...</p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-6">
          <Date dateString={publishDateStr} />
          <ArticleDuration durationMinutes={minRead} />
        </div>
        <div className="flex flex-row"></div>
      </div>
      <div className="flex flex-row gap-2">
        {tags.map((tag) => (
          <ArticleCategoryTag key={tag} category={tag} />
        ))}
      </div>
    </article>
  );
};

export default BigArticle;
