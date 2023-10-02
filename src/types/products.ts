export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: ReadonlyArray<string>;
}

export interface PaginatedProducts {
  products: ReadonlyArray<Product>;
  total: number;
  skip: number;
  limit: number;
}
