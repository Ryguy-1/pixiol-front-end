export interface Category {
  title: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  publishDateStr: string;
  minRead: number;
  tags: string[];
}
