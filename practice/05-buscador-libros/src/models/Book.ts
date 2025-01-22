export interface Book {
  id: string;
  title: string;
  authors: string[];
  imgSrc: string;
  description: string;
  ebooks?: Ebook[];
}

export interface Ebook {
  format: string;
  isAvailable: boolean;
}
