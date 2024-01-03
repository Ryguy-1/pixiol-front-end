import "server-only";
import { EntryCollection } from "contentful";
import { ContentfulCategory, client } from "@/api/contentful";
import { PersistedCategory } from "@/api/data-structures";
import { extractContentfulCategoryInformation } from "./utils";

export const dynamic = "force-dynamic"; // set no cache

export async function GET(): Promise<Response> {
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
  return Response.json(categories);
}
