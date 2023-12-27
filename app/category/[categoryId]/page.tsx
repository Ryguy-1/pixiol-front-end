import React from "react";
import CenterColumn from "@/_components/CenterColumn";
import { fetchCategoryById } from "@/api/categories/serverfunctions";
import { fetchArticlesByCategory } from "@/api/articles/serverfunctions";
import LongArticle from "@/_components/LongArticle";
import { PersistedCategory, PersistedNewsArticle } from "@/api/data-structures";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: { categoryId: string };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = (await parent) as Metadata;

  let category: PersistedCategory;
  try {
    category = await fetchCategoryById(params.categoryId);
  } catch (_) {
    return parentMetadata;
  }

  return {
    ...parentMetadata,
    title: category.title,
    description: `Search results for ${category.title}`,
    keywords: [category.title, ...(parentMetadata.keywords as string[])],
    openGraph: {
      ...parentMetadata.openGraph,
      title: category.title,
      description: `Search results for ${category.title}`,
      url: `${process.env.NEXT_PUBLIC_URL}/category/${params.categoryId}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  let articles: PersistedNewsArticle[];
  let category: PersistedCategory;

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
          <section className="w-full flex flex-col gap-6">
            {articles.map((article) => (
              <LongArticle key={article.id} newsArticle={article} />
            ))}
          </section>
        </div>
      </CenterColumn>
    </main>
  );
}
