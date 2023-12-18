import React from "react";
import SideMenuCategory from "./SideMenuCategory";
import { Category } from "@/api/data-structures";

const Categories: React.FC = async () => {
  const fetchCategories = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/categories", {
      method: "GET",
    });
    const categories = await res.json();
    return categories;
  };
  const categories: Category[] = ((await fetchCategories()) as string[]).map(
    (category) => ({ title: category })
  );

  return (
    <div className="flex flex-col justify-start items-center gap-3 h-full w-full py-5 overflow-y-auto max-h-full">
      {categories.map((category) => (
        <SideMenuCategory key={category.title} category={category} />
      ))}
    </div>
  );
};

export default Categories;
