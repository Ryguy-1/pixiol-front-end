import React from "react";
import { PersistedNewsArticle } from "@/api/data-structures";
import { estimateReadingTime, removeMarkdown } from "@/utils";
import DivBackgroundImage from "./DivBackgroundImage";
import ArticleDuration from "./ArticleDuration";
import Date from "./Date";
import ArticleCategoryTag from "./ArticleCategoryTag";
import Link from "next/link";
import LinkButton from "./LinkButton";

interface BigArticleProps {
  newsArticle?: PersistedNewsArticle;
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

  let { id, title, content, publishedDate, featuredImage, categories } =
    newsArticle;

  content = removeMarkdown(content);

  const CONTENT_PREVIEW_LENGTH = 145;
  const REDIREDT_URL = `${process.env.NEXT_PUBLIC_URL}/article/${id}`;

  return (
    <article className="flex flex-col gap-2">
      <Link href={REDIREDT_URL}>
        <DivBackgroundImage
          src={`https:${featuredImage.url}`}
          alt={"Featured Image for " + title}
          className="h-[18rem] rounded-xl"
        />
      </Link>
      <Link href={REDIREDT_URL} className="text-4xl font-black hover:underline">
        {title}
      </Link>
      <p>{content.slice(0, CONTENT_PREVIEW_LENGTH)}...</p>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-row gap-6 flex-wrap">
          <Date dateString={publishedDate} />
          <ArticleDuration durationMinutes={estimateReadingTime(content)} />
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
