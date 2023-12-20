import "server-only";
import { Entry, EntryCollection } from "contentful";
import { ContentfulCategory, client } from "@/api/contentful";
import { Category } from "../data-structures";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const entries: EntryCollection<ContentfulCategory> = await client.getEntries({
    content_type: "category",
  });
  const categories: Category[] = entries.items.map((item) => {
    return extractContentfulCategoryInformation(item);
  });
  return Response.json(categories);
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

function extractContentfulCategoryInformation(
  item: Entry<ContentfulCategory>
): Category {
  const { sys } = item;
  const { fields } = item;
  const id: string = sys.id;
  const title: string = fields.title as string;
  return {
    id,
    title,
  };
}
