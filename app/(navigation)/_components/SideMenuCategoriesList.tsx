import React, { useEffect, useState } from "react";
import SideMenuCategory from "./SideMenuCategory";
import { PersistedCategory } from "@/api/data-structures";
import SideMenuCategoriesListSkeleton from "./SideMenuCategoriesListSkeleton";

const SideMenuCategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<PersistedCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(process.env.NEXT_PUBLIC_URL + "/api/categories", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((cat) => {
        // cat = cat.splice(0, 30); // TODO: pagination (maybe)
        setCategories(cat);
        setIsLoading(false);
      })
      .catch((_) => {
        setCategories([{ id: "-1", title: "Error" }]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <SideMenuCategoriesListSkeleton />;
  }

  return (
    <div className="flex flex-col justify-start items-center gap-3 py-5 overflow-y-auto">
      {categories.map((category) => (
        <SideMenuCategory key={category.id} category={category} />
      ))}
    </div>
  );
};

export default SideMenuCategoriesList;
