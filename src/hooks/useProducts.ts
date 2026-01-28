import { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import axios from '../services/api';
import type { AppError } from '../types/error';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AppError | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const getProducts = async () => {
      try {
        const response = await axios.get<Product[]>('/products', {
          signal: controller.signal,
        });
        setProducts(response?.data);
      } catch (err: any) {
        if (err.name === 'CanceledError') return;
        setError({
          message: err?.message || 'Something went wrong. Please try again.',
          status: err?.response?.status || 'Network Error',
        });
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
    return () => {
      controller.abort();
    };
  }, []);
  return { products, isLoading, error };
};

export default useProducts;
