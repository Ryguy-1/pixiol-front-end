import React from "react";
import CenterColumn from "@/_components/CenterColumn";
import { fetchCategoryById } from "@/api/categories/route";
import { fetchArticlesByCategory } from "@/api/articles/route";

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  let articles, category;
  try {
    category = await fetchCategoryById(params.categoryId);
    articles = await fetchArticlesByCategory(params.categoryId);
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
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl font-white">{category.title}</h1>
        </div>
      </CenterColumn>
    </main>
  );
}
