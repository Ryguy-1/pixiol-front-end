export interface PersistedAsset {
  id: string;
  url: string;
}

export interface PersistedCategory {
  id: string;
  title: string;
}

export interface PersistedNewsArticle {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  featuredImage: PersistedAsset;
  categories: PersistedCategory[];
}
