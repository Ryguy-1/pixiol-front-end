import React from "react";
import ClientNavWrapper from "../(client)/ClientNavWrapper";
import { fetchCategories } from "@/lib/api";

const ServerNavigator = async () => {
  const categories = await fetchCategories();
  console.log(categories);

  return (
    <>
      <ClientNavWrapper categories={categories} />
    </>
  );
};

export default ServerNavigator;
