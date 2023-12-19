import React from "react";
import BigArticle from "./_components/BigArticle";

const IndexPage: React.FC = async () => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col justify-center w-[75rem] max-w-[75rem] p-4">
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <BigArticle />
          <BigArticle />
        </section>
        <p>below</p>
      </div>
    </main>
  );
};

export default IndexPage;
