import React from "react";
import CenterColumn from "@/_components/CenterColumn";
import { fetchArticlesBySearch } from "@/api/articles/serverfunctions";
import LongArticle from "@/_components/LongArticle";
import { NewsArticle } from "@/api/data-structures";

export default async function CategoryPage({
  params,
}: {
  params: { query: string };
}) {
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
