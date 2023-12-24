import React from "react";
import Date from "@/_components/Date";
import ArticleDuration from "@/_components/ArticleDuration";
import CenterColumn from "@/_components/CenterColumn";
import { fetchArticleById } from "@/api/articles/serverfunctions";
import LinkButton from "@/_components/LinkButton";
import ArticleCategoryTag from "@/_components/ArticleCategoryTag";
import { NewsArticle } from "@/api/data-structures";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = (await parent) as Metadata;

  let article: NewsArticle;
  try {
    article = await fetchArticleById(params.id);
  } catch (_) {
    return parentMetadata;
  }

  const MAX_DESCRIPTION_LENGTH = 100;

  return {
    ...parentMetadata,
    title: article.title,
    description: article.content.slice(0, MAX_DESCRIPTION_LENGTH),
    keywords: [
      ...article.categories.map((c) => c.title),
      ...(parentMetadata.keywords as string[]),
    ],
    openGraph: {
      ...parentMetadata.openGraph,
      title: article.title,
      description: article.content,
      url: `${process.env.NEXT_PUBLIC_URL}/article/${params.id}`,
      images: [
        {
          url: article.imageUrl,
          alt: "Article Image",
        },
      ],
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  let article: NewsArticle;
  try {
    article = await fetchArticleById(params.id);
  } catch (error) {
    return (
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl font-black">{`Article not Found :(`}</h1>
        </div>
      </CenterColumn>
    );
  }

  const { title, content, imageUrl, publishDateStr, minRead, categories } =
    article;

  return (
    <main>
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-col items-start gap-5 lg:pt-20">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black">
            {title}
          </h1>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-4 flex-wrap">
              <Date dateString={publishDateStr} />
              <ArticleDuration durationMinutes={minRead} />
            </div>
            <div>
              <LinkButton
                href={`${process.env.NEXT_PUBLIC_URL}/article/${params.id}`}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 flex-wrap">
            {categories.map((cat) => (
              <ArticleCategoryTag key={cat.id} category={cat} />
            ))}
          </div>
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="w-full h-[15rem] sm:h-[20rem] md:h-[35rem] bg-cover bg-center bg-no-repeat rounded-3xl"
          />
          {content.split("\n").map((paragraph, index) => (
            <p key={index} className="text-2xl">
              {paragraph}
            </p>
          ))}
        </div>
      </CenterColumn>
    </main>
  );
}
