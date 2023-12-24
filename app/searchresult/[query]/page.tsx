import React from "react";
import CenterColumn from "@/_components/CenterColumn";
import { fetchArticlesBySearch } from "@/api/articles/serverfunctions";
import LongArticle from "@/_components/LongArticle";
import { NewsArticle } from "@/api/data-structures";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: { query: string };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = (await parent) as Metadata;

  return {
    ...parentMetadata,
    title: params.query,
    description: `Search results for ${params.query}`,
    keywords: [params.query, ...(parentMetadata.keywords as string[])],
    openGraph: {
      ...parentMetadata.openGraph,
      title: params.query,
      description: `Search results for ${params.query}`,
      url: `${process.env.NEXT_PUBLIC_URL}/searchresult/${params.query}`,
      type: "website",
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  let articles: NewsArticle[];

  try {
    articles = await fetchArticlesBySearch(params.query, 30); // TODO: pagination
  } catch (error) {
    return (
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl font-black">{`Invalid Query :(`}</h1>
        </div>
      </CenterColumn>
    );
  }

  return (
    <main>
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-white italic font-bold">
            {params.query}
          </h1>
          <div className="w-full border-b-2 border-gray-700" />
          <section className="flex flex-col gap-6">
            {articles.map((article) => (
              <LongArticle key={article.id} newsArticle={article} />
            ))}
          </section>
        </div>
      </CenterColumn>
    </main>
  );
}
