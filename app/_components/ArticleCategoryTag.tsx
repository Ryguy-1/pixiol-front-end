import React from "react";

interface ArticleCategoryTagProps {
  category: string;
}

const ArticleCategoryTag: React.FC<ArticleCategoryTagProps> = ({
  category,
}) => {
  return (
    <div className="flex justify-center items-center bg-white rounded-xl px-3 py-0.5">
      <p className="italic font-medium text-black">{category}</p>
    </div>
  );
};

export default ArticleCategoryTag;
