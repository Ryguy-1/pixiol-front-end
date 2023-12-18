import React, { Suspense } from "react";
import { useSideMenu } from "./side-menu-context";
import CategoriesSkeleton from "./CategoriesSkeleton";
import Categories from "./Categories";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useSideMenu();

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen rounded-r-2xl bg-gray-300 transition duration-150 ease-in-out ${
        isOpen ? "w-full sm:w-96 translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-center items-center h-20 border-b-2 border-black">
        <div className="flex justify-between items-center h-full w-5/6">
          <div className="flex justify-center items-center gap-2 bg-black w-5/6 h-1/2 rounded-lg">
            <img
              src="/categories.svg"
              alt="Categories Image"
              className="w-6 h-6"
            />
            <p className="text-white font-montserrat text-lg font-medium">
              Categories
            </p>
          </div>
          <button className="hover:opacity-50" onClick={() => toggleIsOpen()}>
            <img
              src="/box-arrow-black-left.svg"
              alt="Side Bar Expand Button Image"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default SideMenu;
