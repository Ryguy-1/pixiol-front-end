import "server-only";
import { Entry } from "contentful";
import { ContentfulCategory } from "@/api/contentful";
import { Category } from "@/api/data-structures";

export function extractContentfulCategoryInformation(
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
