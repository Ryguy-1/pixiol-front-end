import "server-only";
import { Entry, EntryCollection } from "contentful";
import { ContentfulCategory, client } from "@/api/contentful";
import { PersistedCategory } from "@/api/data-structures";
import { extractContentfulCategoryInformation } from "./utils";

export async function fetchCategories(): Promise<PersistedCategory[]> {
  let skip = 0;
  const limit = 1000;
  let categories: PersistedCategory[] = [];

  while (true) {
    const entries: EntryCollection<ContentfulCategory> =
      await client.getEntries({
        content_type: "category",
        limit: limit,
        skip: skip,
      });

    if (entries.items.length === 0) {
      break;
    }

    categories = [
      ...categories,
      ...entries.items.map((item) =>
        extractContentfulCategoryInformation(item)
      ),
    ];

    skip += limit;
  }

  return categories;
}

export async function fetchCategoryById(
  categoryId: string
): Promise<PersistedCategory> {
  const entry: Entry<ContentfulCategory> = await client.getEntry(categoryId);
  return extractContentfulCategoryInformation(entry);
}
