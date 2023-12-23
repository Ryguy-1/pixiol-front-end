import React from "react";
import { fetchMostRecentArticles } from "@/api/articles/route";
import BigArticle from "../_components/BigArticle";
import LongArticle from "../_components/LongArticle";
import CenterColumn from "@/_components/CenterColumn";

const HomePage: React.FC = async () => {
  const mostRecentArticles = await fetchMostRecentArticles(30);

  return (
    <main>
      <CenterColumn maxWidthRem={75}>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {mostRecentArticles.slice(0, 2).map((newsArticle) => (
            <BigArticle key={newsArticle.id} newsArticle={newsArticle} />
          ))}
        </section>
        <div className="border-b-2 border-white my-8"></div>
        <section className="flex flex-col gap-10">
          {mostRecentArticles.slice(2).map((newsArticle) => (
            <LongArticle key={newsArticle.id} newsArticle={newsArticle} />
          ))}
        </section>
      </CenterColumn>
    </main>
  );
};

export default HomePage;
