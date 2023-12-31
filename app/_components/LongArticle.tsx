import React from "react";
import { estimateReadingTime, removeMarkdown } from "@/utils";
import { PersistedNewsArticle } from "@/api/data-structures";
import DivBackgroundImage from "./DivBackgroundImage";
import ArticleDuration from "./ArticleDuration";
import Date from "./Date";
import ArticleCategoryTag from "./ArticleCategoryTag";
import Link from "next/link";
import LinkButton from "./LinkButton";

interface LongArticleProps {
  newsArticle?: PersistedNewsArticle;
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

  let { id, title, content, publishedDate, featuredImage, categories } =
    newsArticle;

  content = removeMarkdown(content);

  const CONTENT_PREVIEW_LENGTH = 145;
  const REDIREDT_URL = `${process.env.NEXT_PUBLIC_URL}/article/${id}`;

  return (
    <article className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-2 md:w-4/6">
        <Link
          href={REDIREDT_URL}
          className="text-4xl font-black hover:underline"
        >
          {title}
        </Link>
        <p>{content.slice(0, CONTENT_PREVIEW_LENGTH)}...</p>
        <div className="flex flex-row gap-3 pt-3 flex-wrap">
          {categories.map((cat) => (
            <ArticleCategoryTag key={cat.id} category={cat} />
          ))}
        </div>
      </div>

      <div className="flex flex-row md:flex-col justify-start items-start gap-4 md:w-1/6 flex-wrap">
        <Date dateString={publishedDate} />
        <ArticleDuration durationMinutes={estimateReadingTime(content)} />
        <LinkButton href={REDIREDT_URL} />
      </div>

      <Link href={REDIREDT_URL} className="md:w-2/6">
        <DivBackgroundImage
          src={`https:${featuredImage.url}`}
          alt={"Featured Image for " + title}
          className="rounded-xl h-full hidden md:block"
        />
      </Link>
    </article>
  );
};

export default LongArticle;
