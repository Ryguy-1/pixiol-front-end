import React from "react";
import CenterColumn from "@/_components/CenterColumn";

export default function CategoryPageSkeleton() {
  return (
    <main>
      <CenterColumn maxWidthRem={60}>
        <div className="flex flex-row justify-center">
          <h1 className="text-4xl">LOADING</h1>
        </div>
      </CenterColumn>
    </main>
  );
}
