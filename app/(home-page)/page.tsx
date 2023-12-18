import React from "react";
import {
  fetchArticleById,
  fetchMostRecentArticles,
} from "@/api/_lib/fetchNewsArticles";
import BigArticle from "./_components/BigArticle";

const IndexPage: React.FC = async () => {
  const mostRecentArticles = await fetchMostRecentArticles(10);

  return (
    <main className="flex justify-center">
      <div className="flex flex-col justify-center max-w-[75rem] border-2">
        <div className="grid grid-cols-2 gap-4">
          <BigArticle {...mostRecentArticles[0]} />
        </div>
        <p>below</p>
      </div>
    </main>
  );
};

export default IndexPage;
