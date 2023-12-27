import { MetadataRoute } from "next";
import { fetchCategories } from "@/api/categories/serverfunctions";
import { fetchArticles } from "@/api/articles/serverfunctions";
import { PersistedCategory, PersistedNewsArticle } from "@/api/data-structures";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories: PersistedCategory[] = await fetchCategories();
  const articles: PersistedNewsArticle[] = await fetchArticles();

  // leave out "lastModified: new Date()"
  return [
    {
      url: "https://www.pixiol.com",
      changeFrequency: "hourly" as const,
      priority: 1,
    },
    ...categories.map((category) => {
      return {
        url: `https://www.pixiol.com/category/${category.id}`,
        changeFrequency: "hourly" as const,
        priority: 0.3,
      };
    }),
    ...articles.map((article) => {
      return {
        url: `https://www.pixiol.com/article/${article.id}`,
        changeFrequency: "daily" as const,
        priority: 0.1,
      };
    }),
  ];
}
