import "server-only";
import { Entry } from "contentful";
import { ContentfulCategory } from "@/api/contentful";
import { Category, NewsArticle } from "@/api/data-structures";

export function extractContentfulCategoryInformation(
  item: Entry<ContentfulCategory>
): NewsArticle {
  const { sys } = item;
  const { fields } = item;

  const id: string = sys.id as string;
  const title: string = fields.title as string;
  let content: string = fields.content as string;
  const imageUrl: string = ("https:" +
    (fields.featuredImage as any).fields.file.url) as string;
  const publishDateStr = new Date(fields.publishedDate as string)
    .toISOString()
    .split("T")[0];
  const minRead = estimateReadingTime(content);
  const categories: Category[] = (fields.categories as any[]).map(
    (category) => {
      return {
        id: category.sys.id as string,
        title: category.fields.title as string,
      };
    }
  );

  return {
    id,
    title,
    content,
    imageUrl,
    publishDateStr,
    minRead,
    categories,
  };
}

function estimateReadingTime(text: string): number {
  if (!text) return 0;
  const wordsPerMinute = 200;
  const words = text.split(" ").length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
}
