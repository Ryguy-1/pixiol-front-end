"use client";
import React, { useEffect, useState } from "react";
import SideMenuCategory from "./SideMenuCategory";
import { Category } from "@/api/data-structures";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_URL + "/api/categories", {
      method: "GET",
      next: { revalidate: 3600 },
    })
      .then((res) => res.json())
      .then((categories) => {
        setCategories(
          (categories as string[]).map((category) => ({ title: category }))
        );
      })
      .catch((_) => {
        setCategories([{ title: "Error Loading Categories" }]);
      });
  }, []);

  return (
    <div className="flex flex-col justify-start items-center gap-3 py-5 overflow-y-auto">
      {categories.map((category) => (
        <SideMenuCategory key={category.title} category={category} />
      ))}
    </div>
  );
};

export default Categories;
