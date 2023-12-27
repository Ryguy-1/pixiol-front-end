import "server-only";
import { Entry } from "contentful";
import { ContentfulCategory } from "@/api/contentful";
import {
  PersistedAsset,
  PersistedCategory,
  PersistedNewsArticle,
} from "@/api/data-structures";

const PLACEHOLDER_STRING = "~";

export function extractContentfulCategoryInformation(
  item: Entry<ContentfulCategory>
): PersistedNewsArticle {
  const { sys } = item;
  const { fields } = item;

  const id: string = sys.id; // required string
  const title: string = (fields.title ?? PLACEHOLDER_STRING) as string;
  const content: string = (fields.content ?? PLACEHOLDER_STRING) as string;
  let publishedDate: string = (fields.publishedDate ??
    PLACEHOLDER_STRING) as string;
  try {
    // try to improve the date format
    publishedDate = new Date(publishedDate).toISOString().split("T")[0];
  } catch (e) {}
  const featuredImage: PersistedAsset = {
    id: ((fields.featuredImage as any)?.sys.id ?? PLACEHOLDER_STRING) as string,
    url: ((fields.featuredImage as any)?.fields.file.url ??
      PLACEHOLDER_STRING) as string,
  };
  const categories: PersistedCategory[] = (
    (fields.categories as any[]) ?? []
  ).map((category) => {
    return {
      id: category.sys.id as string,
      title: category.fields.title as string,
    };
  });

  return {
    id,
    title,
    content,
    publishedDate,
    featuredImage,
    categories,
  };
}
