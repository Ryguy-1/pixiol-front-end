import CenterColumn from "@/_components/CenterColumn";
import LongArticle from "@/_components/LongArticle";
import React from "react";

export default function SkeletonCategoryPage() {
  return (
    <main>
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-col items-center gap-3">
          <div className="h-[3rem] w-2/6 rounded-xl animate-pulse bg-gray-600"></div>
          <div className="w-full border-b-2 border-gray-700" />
          <div className="w-full flex flex-col gap-6">
            {[...Array(10)].map((_, i) => (
              <LongArticle key={i} />
            ))}
          </div>
        </div>
      </CenterColumn>
    </main>
  );
}
