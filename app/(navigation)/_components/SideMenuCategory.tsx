"use client";
import React from "react";
import { PersistedCategory } from "@/api/data-structures";
import { useRouter } from "next/navigation";
import { useSideMenu } from "./side-menu-context";

interface SideMenuCategoryProps {
  category?: PersistedCategory;
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
        className="shrink-0 w-5/6 h-10 rounded-xl bg-black flex flex-row justify-center items-center"
        onClick={() => {
          router.push(`/category/${category.id}`);
          setIsOpen(false);
        }}
      >
        <p>{category.title}</p>
      </button>
    </>
  );
};
export default SideMenuCategory;
