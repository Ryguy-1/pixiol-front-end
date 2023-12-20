import CenterColumn from "@/_components/CenterColumn";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <CenterColumn>
        <h1>{params.id}</h1>
      </CenterColumn>
    </main>
  );
}
