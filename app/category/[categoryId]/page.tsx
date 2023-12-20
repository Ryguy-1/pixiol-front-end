import React from "react";
import CenterColumn from "@/_components/CenterColumn";
import { fetchCategoryById } from "@/api/categories/route";
import { fetchArticlesByCategory } from "@/api/articles/route";
import LongArticle from "@/_components/LongArticle";

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  let articles, category;
  try {
    category = await fetchCategoryById(params.categoryId);
    articles = await fetchArticlesByCategory(params.categoryId, 30); // TODO: pagination
    console.log(articles);
  } catch (error) {
    return (
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl font-black">{`Category Id:${params.categoryId} not Found :(`}</h1>
        </div>
      </CenterColumn>
    );
  }

  return (
    <main>
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-white italic font-bold">
            {category.title}
          </h1>
          <div className="w-full border-b-2 border-gray-700" />
          <div className="flex flex-col gap-6">
            {articles.map((article) => (
              <LongArticle key={article.id} newsArticle={article} />
            ))}
          </div>
        </div>
      </CenterColumn>
    </main>
  );
}