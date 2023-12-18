import React from "react";

interface SideMenuCategoryProps {
  category?: string;
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
        <h2>{category}</h2>
      </button>
    </>
  );
};
export default SideMenuCategory;
