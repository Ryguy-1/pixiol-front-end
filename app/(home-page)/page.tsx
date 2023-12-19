import React from "react";
import { fetchMostRecentArticles } from "@/api/_lib/fetchNewsArticles";
import BigArticle from "../_components/BigArticle";
import LongArticle from "../_components/LongArticle";

const HomePage: React.FC = async () => {
  const mostRecentArticles = await fetchMostRecentArticles(10);

  return (
    <main className="flex justify-center">
      <div className="flex flex-col justify-center w-[75rem] max-w-[75rem] p-4">
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
        <p>below</p>
      </div>
    </main>
  );
};

export default HomePage;
