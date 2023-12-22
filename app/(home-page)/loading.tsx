import React from "react";
import BigArticle from "../_components/BigArticle";
import LongArticle from "../_components/LongArticle";
import CenterColumn from "@/_components/CenterColumn";

const SkeletonHomePage: React.FC = () => {
  return (
    <main>
      <CenterColumn maxWidthRem={75}>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <BigArticle />
          <BigArticle />
        </section>
        <div className="border-b-2 border-white my-8"></div>
        <section className="flex flex-col gap-10">
          <LongArticle />
          <LongArticle />
        </section>
      </CenterColumn>
    </main>
  );
};

export default SkeletonHomePage;
