import React from "react";
import CenterColumn from "@/_components/CenterColumn";
import { fetchCategoryById } from "@/api/categories/serverfunctions";
import { fetchArticlesByCategory } from "@/api/articles/serverfunctions";
import LongArticle from "@/_components/LongArticle";
import { Category, NewsArticle } from "@/api/data-structures";

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  let articles: NewsArticle[];
  let category: Category;

  try {
    category = await fetchCategoryById(params.categoryId);
    articles = await fetchArticlesByCategory(params.categoryId, 30); // TODO: pagination
  } catch (error) {
    return (
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl font-black">{`Category not Found :(`}</h1>
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
