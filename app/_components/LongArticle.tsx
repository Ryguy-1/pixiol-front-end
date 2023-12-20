import React from "react";
import { NewsArticle } from "@/api/data-structures";
import ArticleDuration from "./ArticleDuration";
import Date from "./Date";
import ArticleCategoryTag from "./ArticleCategoryTag";
import Link from "next/link";
import LinkButton from "./LinkButton";

interface LongArticleProps {
  newsArticle?: NewsArticle;
}

const LongArticle: React.FC<LongArticleProps> = ({ newsArticle }) => {
  if (!newsArticle) {
    return (
      <article className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 md:w-4/6">
          <div className="w-2/3 h-[2rem] rounded-xl animate-pulse bg-gray-600" />
          <div className="w-5/6 h-[4rem] rounded-xl animate-pulse bg-gray-600" />
          <div className="flex flex-row gap-3 pt-3 flex-wrap">
            <div className="w-1/6 h-[2rem] rounded-xl animate-pulse bg-gray-600" />
            <div className="w-1/6 h-[2rem] rounded-xl animate-pulse bg-gray-600" />
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-start items-start gap-2 md:w-1/6 flex-wrap">
          <div className="w-1/6 md:w-5/6 h-[2.5rem] rounded-xl animate-pulse bg-gray-600" />
          <div className="w-1/6 md:w-5/6 h-[2.5rem] rounded-xl animate-pulse bg-gray-600" />
          <div className="w-1/6 md:w-5/6 h-[2.5rem] rounded-xl animate-pulse bg-gray-600" />
        </div>
        <div className="h-[10rem] rounded-3xl md:w-2/6 hidden md:block animate-pulse bg-gray-600" />
      </article>
    );
  }

  const { id, title, content, imageUrl, publishDateStr, minRead, tags } =
    newsArticle;
  const CONTENT_PREVIEW_LENGTH = 145;

  return (
    <article className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-2 md:w-4/6">
        <Link
          href={`${process.env.NEXT_PUBLIC_URL}/article/${id}`}
          className="text-4xl font-black hover:underline"
        >
          {title}
        </Link>
        <p>{content.slice(0, CONTENT_PREVIEW_LENGTH)}...</p>
        <div className="flex flex-row gap-3 pt-3 flex-wrap">
          {tags.map((tag) => (
            <ArticleCategoryTag key={tag} category={tag} />
          ))}
        </div>
      </div>

      <div className="flex flex-row md:flex-col justify-start items-start gap-4 md:w-1/6 flex-wrap">
        <Date dateString={publishDateStr} />
        <ArticleDuration durationMinutes={minRead} />
        <LinkButton href={`${process.env.NEXT_PUBLIC_URL}/article/${id}`} />
      </div>

      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="bg-cover bg-center bg-no-repeat rounded-3xl md:w-2/6 hidden md:block"
      />
    </article>
  );
};

export default LongArticle;
