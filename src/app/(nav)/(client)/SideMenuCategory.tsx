import React from "react";

interface SideMenuCategoryProps {
  category: string;
}

const SideMenuCategory: React.FC<SideMenuCategoryProps> = ({ category }) => {
  return (
    <button className="flex flex-row justify-center items-center w-full h-10 rounded-xl bg-black">
      <h2>{category}</h2>
    </button>
  );
};

export default SideMenuCategory;
