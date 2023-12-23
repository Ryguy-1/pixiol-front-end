"use client";
import React from "react";
import { Category } from "@/api/data-structures";
import { useRouter } from "next/navigation";
import { useSideMenu } from "./side-menu-context";

interface SideMenuCategoryProps {
  category?: Category;
}

const SideMenuCategory: React.FC<SideMenuCategoryProps> = ({ category }) => {
  const router = useRouter();
  const [_, setIsOpen] = useSideMenu();

  if (!category) {
    return (
      <div className="shrink-0 w-5/6 h-10 rounded-xl animate-pulse bg-gray-600"></div>
    );
  }

  return (
    <>
      <button
        className="shrink-0 flex flex-row justify-center items-center w-5/6 h-10 rounded-xl bg-black"
        onClick={() => {
          router.push(`/category/${category.id}`);
          setIsOpen(false);
        }}
      >
        <p>{category ? category.title : ""}</p>
      </button>
    </>
  );
};
export default SideMenuCategory;
