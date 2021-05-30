export interface WikipediaThumbnail {
  mimetype: string;
  size: number | null;
  width: number | null;
  height: number | null;
  duration: number | null;
  url: string;
}

export interface WikipediaPageResult {
  id: number;
  key: string;
  title: string;
  excerpt: string;
  description: string;
  thumbnail: WikipediaThumbnail;
}

export interface Properties {
  searchResult: ReadonlyArray<WikipediaPageResult>;
}
