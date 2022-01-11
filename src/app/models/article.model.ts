export interface Article {
  id: number;
  name: string;
  price: number;
  info: string;
}

export interface CartArticle {
  id: number;
  name: string;
  price: number;
  info: string;
  quantity?: number;
}

