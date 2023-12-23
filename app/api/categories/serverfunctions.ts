import "server-only";
import { Entry, EntryCollection } from "contentful";
import { ContentfulCategory, client } from "@/api/contentful";
import { Category } from "@/api/data-structures";
import { extractContentfulCategoryInformation } from "./utils";

export async function fetchCategoryById(categoryId: string): Promise<Category> {
  const entry: Entry<ContentfulCategory> = await client.getEntry(categoryId);
  return extractContentfulCategoryInformation(entry);
}

export async function fetchCategories(): Promise<Category[]> {
  const entries: EntryCollection<ContentfulCategory> = await client.getEntries({
    content_type: "category",
  });
  const articleList: Category[] = entries.items.map((item) => {
    return extractContentfulCategoryInformation(item);
  });
  return articleList;
}
