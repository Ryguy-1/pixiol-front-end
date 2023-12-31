import CenterColumn from "@/_components/CenterColumn";
import React from "react";

export default function SkeletonArticlePage() {
  return (
    <main>
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-col items-start gap-5">
          <div className="h-[4rem] sm:h-[6rem] w-5/6 rounded-xl animate-pulse bg-gray-600"></div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-4 flex-wrap w-5/6">
              <div className="h-[3rem] w-1/6 rounded-xl animate-pulse bg-gray-600"></div>
              <div className="h-[3rem] w-1/6 rounded-xl animate-pulse bg-gray-600"></div>
            </div>
            <div className="w-1/6">
              <div className="h-[3rem] w-2/3 rounded-xl animate-pulse bg-gray-600"></div>
            </div>
          </div>
          <div className="flex flex-row gap-4 flex-wrap w-full">
            <div className="h-[2rem] w-1/6 rounded-xl animate-pulse bg-gray-600"></div>
            <div className="h-[2rem] w-1/6 rounded-xl animate-pulse bg-gray-600"></div>
            <div className="h-[2rem] w-1/6 rounded-xl animate-pulse bg-gray-600"></div>
          </div>
          <div className="w-full h-[15rem] sm:h-[20rem] md:h-[35rem] rounded-xl animate-pulse bg-gray-600"></div>
          <div className="h-[3rem] w-full rounded-xl animate-pulse bg-gray-600"></div>
        </div>
      </CenterColumn>
    </main>
  );
}
