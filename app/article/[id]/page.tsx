import React from "react";
import Date from "@/_components/Date";
import { estimateReadingTime, removeMarkdown } from "@/utils";
import DivBackgroundImage from "@/_components/DivBackgroundImage";
import ArticleDuration from "@/_components/ArticleDuration";
import CenterColumn from "@/_components/CenterColumn";
import { fetchArticleById } from "@/api/articles/serverfunctions";
import LinkButton from "@/_components/LinkButton";
import ArticleCategoryTag from "@/_components/ArticleCategoryTag";
import { PersistedNewsArticle } from "@/api/data-structures";
import { remark } from "remark";
import html from "remark-html";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = (await parent) as Metadata;

  let article: PersistedNewsArticle;
  try {
    article = await fetchArticleById(params.id);
  } catch (_) {
    return parentMetadata;
  }

  const MAX_DESCRIPTION_LENGTH = 100;
  const descriptionFromContent = removeMarkdown(article.content).slice(
    0,
    MAX_DESCRIPTION_LENGTH
  );

  return {
    ...parentMetadata,
    title: article.title,
    description: descriptionFromContent,
    keywords: [
      ...article.categories.map((c) => c.title),
      ...(parentMetadata.keywords as string[]),
    ],
    openGraph: {
      ...parentMetadata.openGraph,
      title: article.title,
      description: descriptionFromContent,
      url: `${process.env.NEXT_PUBLIC_URL}/article/${params.id}`,
      images: [
        {
          url: article.featuredImage.url,
          alt: "Article Image",
        },
      ],
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  let article: PersistedNewsArticle;
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

  const { title, content, publishedDate, featuredImage, categories } = article;

  const processedContent = await remark()
    .use(html)
    .process(content)
    .then((c) => {
      return c.toString();
    })
    .catch((_) => {
      console.error("Error processing markdown. Defaulting to raw content.");
      return content; // fallback to raw content
    });

  return (
    <main>
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-col items-start gap-5 lg:pt-20">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black">
            {title}
          </h1>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-4 flex-wrap">
              <Date dateString={publishedDate} />
              <ArticleDuration durationMinutes={estimateReadingTime(content)} />
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
          <DivBackgroundImage
            src={`https:${featuredImage.url}`}
            alt={"Featured Image for " + title}
            className="w-full h-[15rem] sm:h-[20rem] md:h-[35rem] rounded-3xl"
          />
          <div
            className="prose prose-invert prose-xl"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </div>
      </CenterColumn>
    </main>
  );
}
