import Date from "@/_components/Date";
import ArticleDuration from "@/_components/ArticleDuration";
import CenterColumn from "@/_components/CenterColumn";
import { fetchArticleById } from "@/api/_lib/fetchNewsArticles";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  let article;
  try {
    article = await fetchArticleById(params.id);
  } catch (error) {
    return (
      <CenterColumn>
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl font-black">{`Article #${params.id} not Found :(`}</h1>
        </div>
      </CenterColumn>
    );
  }

  const { title, content, imageUrl, publishDateStr, minRead, tags } = article;

  console.log(article);

  return (
    <main>
      <CenterColumn>
        <div className="flex flex-col items-start gap-5 lg:pt-20">
          <h1 className="text-8xl font-black">{title}</h1>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-4">
              <Date dateString={publishDateStr} />
              <ArticleDuration durationMinutes={minRead} />
            </div>
            <div></div>
          </div>
        </div>
      </CenterColumn>
    </main>
  );
}
