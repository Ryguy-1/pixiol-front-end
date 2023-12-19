import "server-only";
import { EntryCollection } from "contentful";
import { ContentfulCategory, client } from "@/api/contentful";

export const dynamic = "force-dynamic";

export async function GET() {
  const entries: EntryCollection<ContentfulCategory> = await client.getEntries({
    content_type: "category",
  });
  const titleList: string[] = entries.items.map(
    (item) => item.fields.title as string
  );
  return Response.json(titleList);
}
