import "server-only";
import { Entry } from "contentful";
import { ContentfulCategory } from "@/api/contentful";
import { PersistedCategory } from "@/api/data-structures";

const PLACEHOLDER_STRING = "~";

export function extractContentfulCategoryInformation(
  item: Entry<ContentfulCategory>
): PersistedCategory {
  const { sys } = item;
  const { fields } = item;
  const id: string = sys.id; // required string
  const title: string = (fields.title ?? PLACEHOLDER_STRING) as string;
  return {
    id,
    title,
  };
}
