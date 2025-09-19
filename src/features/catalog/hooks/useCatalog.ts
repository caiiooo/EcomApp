import { useEffect, useMemo, useState } from "react";
import { productService } from "@api/productService";
import { Product } from "@types";

export function useCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchProducts() {
      try {
        const data = await productService.getAll();
        if (isMounted) setProducts(data);
      } catch (err) {
        if (isMounted) setError("Erro ao carregar produtos");
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return useMemo(() => ({ products, loading, error }), [
    products,
    loading,
    error,
  ]);
}
