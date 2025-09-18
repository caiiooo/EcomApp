import { useEffect, useState } from "react";
import { productService } from "@api/productService";

export function useProductDetail(id: number) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await productService.getById(id);
        setProduct(data);
      } catch (err) {
        console.error("Erro ao buscar produto", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return { product, loading };
}
