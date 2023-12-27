import "server-only";
import { Entry, EntryCollection } from "contentful";
import { ContentfulCategory, client } from "@/api/contentful";
import { PersistedCategory } from "@/api/data-structures";
import { extractContentfulCategoryInformation } from "./utils";

export async function fetchCategories(): Promise<PersistedCategory[]> {
  const entries: EntryCollection<ContentfulCategory> = await client.getEntries({
    content_type: "category",
  });
  const articleList: PersistedCategory[] = entries.items.map((item) => {
    return extractContentfulCategoryInformation(item);
  });
  return articleList;
}

export async function fetchCategoryById(
  categoryId: string
): Promise<PersistedCategory> {
  const entry: Entry<ContentfulCategory> = await client.getEntry(categoryId);
  return extractContentfulCategoryInformation(entry);
}
