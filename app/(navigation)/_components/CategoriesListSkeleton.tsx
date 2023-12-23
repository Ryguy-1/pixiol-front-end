import React from "react";
import SideMenuCategory from "./SideMenuCategory";

const CategoriesListSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-3 py-5 overflow-y-auto">
      {[...Array(10)].map((_, index) => (
        <SideMenuCategory key={index} />
      ))}
    </div>
  );
};

export default CategoriesListSkeleton;
