export interface Product {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

export interface Cart {
  id: string;
  products: Product[];
  total: number;
  userId: string;
}
