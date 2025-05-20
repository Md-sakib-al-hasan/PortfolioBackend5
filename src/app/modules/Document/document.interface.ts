export interface TDocument {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
  };
  coverImage: string;
  content: string;
  tags?: string[];
  isPublished: boolean;
  isDelete: boolean;
}
