export interface Product {
  id: number;
  category: {
    id: number;
    name: string;
    status: string;
  };
  title: string;
  description: string;
  price: number;
  productImgs: [] | string;
  status: string;
}
