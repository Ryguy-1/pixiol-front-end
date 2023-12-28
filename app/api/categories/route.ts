import "server-only";
import { EntryCollection } from "contentful";
import { ContentfulCategory, client } from "@/api/contentful";
import { PersistedCategory } from "@/api/data-structures";
import { extractContentfulCategoryInformation } from "./utils";

export const dynamic = "force-dynamic"; // set no cache

export async function GET(): Promise<Response> {
  const entries: EntryCollection<ContentfulCategory> = await client.getEntries({
    content_type: "category",
  });
  const categories: PersistedCategory[] = entries.items.map((item) => {
    return extractContentfulCategoryInformation(item);
  });
  return Response.json(categories);
}
