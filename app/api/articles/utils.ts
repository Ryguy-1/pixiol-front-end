import "server-only";
import { Entry } from "contentful";
import { ContentfulCategory } from "@/api/contentful";
import { Category, NewsArticle } from "@/api/data-structures";

export function extractContentfulCategoryInformation(
  item: Entry<ContentfulCategory>
): NewsArticle {
  const { sys } = item;
  const { fields } = item;

  const id: string = sys.id; // required string
  const title: string = (fields.title ?? "-") as string;
  const content: string = (fields.content ?? "-") as string;
  const imageUrl: string = ("https:" +
    ((fields.featuredImage as any)?.fields.file.url ?? "-")) as string;

  let publishDateStr: string = (fields.publishedDate ?? "-") as string;
  try {
    publishDateStr = new Date(publishDateStr).toISOString().split("T")[0];
  } catch (e) {}

  const minRead = estimateReadingTime(content);
  const categories: Category[] = ((fields.categories as any[]) ?? []).map(
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
  const wordsPerMinute = 200;
  const words = text.split(" ").length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
}
