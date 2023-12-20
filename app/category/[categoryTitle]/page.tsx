import React from "react";
import CenterColumn from "@/_components/CenterColumn";
import { fetchArticlesByCategory } from "@/api/articles/route";

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  let category;
  try {
    category = await fetchArticlesByCategory(params.categoryId);
  } catch (error) {
    return (
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl font-black">{`Article #${params.categoryTitle} not Found :(`}</h1>
        </div>
      </CenterColumn>
    );
  }
  return (
    <main>
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl font-white">{params.categoryTitle}</h1>
          <p>asfd</p>
        </div>
      </CenterColumn>
    </main>
  );
}
