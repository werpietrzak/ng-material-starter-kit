export interface ProductModel {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface NewProductModel {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
