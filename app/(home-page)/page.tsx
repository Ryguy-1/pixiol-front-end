import React from "react";
import {
  fetchArticleById,
  fetchMostRecentArticles,
} from "@/api/_lib/fetchNewsArticles";
import BigArticle from "./_components/BigArticle";

const IndexPage: React.FC = async () => {
  const mostRecentArticles = await fetchMostRecentArticles(10);

  return (
    <>
      <p>asdf</p>
    </>
  );
};

export default IndexPage;
