import React from "react";
import { Category } from "@/api/data-structures";

interface SideMenuCategoryProps {
  category?: Category;
  isPlaceHolder?: boolean;
}

const SideMenuCategory: React.FC<SideMenuCategoryProps> = ({
  category,
  isPlaceHolder,
}) => {
  return (
    <>
      <button
        className={`shrink-0 flex flex-row justify-center items-center w-5/6 h-10 rounded-xl ${
          isPlaceHolder ? " animate-pulse bg-gray-600" : "bg-black"
        }`}
      >
        <h2>{typeof category === "undefined" ? "" : category.title}</h2>
      </button>
    </>
  );
};
export default SideMenuCategory;
