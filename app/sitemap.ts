import { MetadataRoute } from "next";
import { fetchCategories } from "@/api/categories/serverfunctions";
import { fetchArticles } from "@/api/articles/serverfunctions";
import { Category, NewsArticle } from "@/api/data-structures";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories: Category[] = await fetchCategories();
  const articles: NewsArticle[] = await fetchArticles();

  return [
    {
      url: "https://www.pixiol.com",
      // leave out "lastModified: new Date()"
      changeFrequency: "hourly" as const,
      priority: 1,
    },
    ...categories.map((category) => {
      return {
        url: `https://www.pixiol.com/category/${category.id}`,
        // leave out "lastModified: new Date()"
        changeFrequency: "hourly" as const,
        priority: 0.8,
      };
    }),
    ...articles.map((article) => {
      return {
        url: `https://www.pixiol.com/article/${article.id}`,
        lastModified: new Date(article.publishDateStr),
        changeFrequency: "daily" as const,
        priority: 0.5,
      };
    }),
  ];
}
