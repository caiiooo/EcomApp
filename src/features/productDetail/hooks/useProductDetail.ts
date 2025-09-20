import { useEffect, useMemo, useState } from 'react';
import { productService } from '@api/productService';
import { Product } from '@types';

export function useProductDetail(id: number) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchProduct() {
      try {
        const data = await productService.getById(id);
        if (isMounted) setProduct(data);
      } catch (err) {
        console.error('Erro ao buscar produto', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProduct();
    return () => {
      isMounted = false;
    };
  }, [id]);

  return useMemo(() => ({ product, loading }), [product, loading]);
}
