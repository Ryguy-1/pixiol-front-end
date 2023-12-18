import { Entry, EntryCollection } from "contentful";
import { ContentfulCategory, client } from "@/api/contentful";
import { NewsArticle } from "@/api/data-structures";

export async function fetchArticleById(
  articleId: string
): Promise<NewsArticle> {
  const entry: Entry<ContentfulCategory> = await client.getEntry(articleId);
  return extractContentfulCategoryInformation(entry);
}

export async function fetchMostRecentArticles(
  limit: number
): Promise<NewsArticle[]> {
  const entries: EntryCollection<ContentfulCategory> = await client.getEntries({
    content_type: "newsArticle",
    order: ["sys.createdAt"],
    limit: limit,
  });
  const articleList: NewsArticle[] = entries.items.map((item) => {
    return extractContentfulCategoryInformation(item);
  });
  return articleList;
}

function extractContentfulCategoryInformation(
  item: Entry<ContentfulCategory>
): NewsArticle {
  const { sys } = item;
  const { fields } = item;

  const id: string = sys.id; // Fix: Specify the type of id as string
  const title: string = fields.title as string;
  let content: string = "";
  for (const contentNode of (fields.content as any).content) {
    if (contentNode.nodeType !== "paragraph") continue;
    for (const contentNodeChild of contentNode.content) {
      if (contentNodeChild.nodeType !== "text") continue;
      content += contentNodeChild.value;
      content += " ";
    }
    content += "\n";
  }
  const imageUrl: string = ("https:" +
    (fields.featuredImage as any).fields.file.url) as string;
  const publishDateStr = new Date(fields.publishedDate as string)
    .toISOString()
    .split("T")[0];
  const minRead = estimateReadingTime(content);
  const tags = (fields.categories as any[]).map(
    (category) => category.fields.title
  );

  return {
    id,
    title,
    content,
    imageUrl,
    publishDateStr,
    minRead,
    tags,
  };
}

function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
}
