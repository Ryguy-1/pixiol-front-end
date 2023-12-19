import React from "react";
import {
  fetchArticleById,
  fetchMostRecentArticles,
} from "@/api/_lib/fetchNewsArticles";
import BigArticle from "./_components/BigArticle";

const HomePage: React.FC = async () => {
  const mostRecentArticles = await fetchMostRecentArticles(10);

  return (
    <main className="flex justify-center">
      <div className="flex flex-col justify-center w-[75rem] max-w-[75rem] p-4">
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <BigArticle newsArticle={mostRecentArticles[0]} />
        </section>
        <p>below</p>
      </div>
    </main>
  );
};

export default HomePage;
