import React from "react";
import SideMenuCategory from "./SideMenuCategory";

const Categories: React.FC = async () => {
  const fetchCategories = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/categories", {
      method: "GET",
    });
    const categories = await res.json();
    return categories;
  };
  const categories = (await fetchCategories()) as string[];

  return (
    <div className="flex flex-col justify-start items-center gap-3 h-full w-full pt-5">
      {categories.map((category) => (
        <SideMenuCategory key={category} category={category} />
      ))}
    </div>
  );
};

export default Categories;
