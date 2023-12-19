import React from "react";
import { Category } from "@/api/data-structures";

interface SideMenuCategoryProps {
  category?: Category;
}

const SideMenuCategory: React.FC<SideMenuCategoryProps> = ({ category }) => {
  if (!category) {
    return (
      <div className="shrink-0 w-5/6 h-10 rounded-xl animate-pulse bg-gray-600"></div>
    );
  }

  return (
    <>
      <button className="shrink-0 flex flex-row justify-center items-center w-5/6 h-10 rounded-xl bg-black">
        <h2>{category ? category.title : ""}</h2>
      </button>
    </>
  );
};
export default SideMenuCategory;
