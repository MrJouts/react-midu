export interface Book {
  id: string;
  imgSrc: string;
  title: string;
  authors: string[];
  price: number;
  description: string;
  ebooks?: Ebook[];
}

export interface Ebook {
  format: string;
  isAvailable: boolean;
}
