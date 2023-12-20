import Date from "@/_components/Date";
import ArticleDuration from "@/_components/ArticleDuration";
import CenterColumn from "@/_components/CenterColumn";
import { fetchArticleById } from "@/api/articles/route";
import React from "react";
import LinkButton from "@/_components/LinkButton";
import ArticleCategoryTag from "@/_components/ArticleCategoryTag";

export default async function Page({ params }: { params: { id: string } }) {
  let article;
  try {
    article = await fetchArticleById(params.id);
  } catch (error) {
    return (
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl font-black">{`Article Id:${params.id} not Found :(`}</h1>
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
