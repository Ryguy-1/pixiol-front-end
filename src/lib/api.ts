import { createClient, EntryCollection } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be set"
  );
}

const client = createClient({ space, accessToken });

interface Category {
  fields: any;
  contentTypeId: string;
}

export const fetchCategories = async (): Promise<string[]> => {
  const entries: EntryCollection<Category> = await client.getEntries({
    content_type: "category",
  });
  return entries.items.map((item) => item.fields.title as string);
};
