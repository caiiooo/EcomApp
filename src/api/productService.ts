import apiClient from './apiClient';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const productService = {
  async getAll(): Promise<Product[]> {
    const { data } = await apiClient.get<Product[]>('/products');
    return data;
  },

  async getById(id: number): Promise<Product> {
    const { data } = await apiClient.get<Product>(`/products/${id}`);
    return data;
  },
};
