import React, { useMemo } from "react";
import { Product } from "@types";
import { Card, Price, ProductImage, Title } from "./ProductCard.styles";
import FastImage from "react-native-fast-image";
import { priceFormat } from "@shared/utils/format";

interface Props {
  product: Product;
  onPress: () => void;
}

function ProductCard({ product, onPress }: Props) {
  const source = useMemo(
    () => ({
      uri: product.image,
      cache: FastImage.cacheControl.immutable,
    }),
    [product.image]
  );

  return (
    <Card
      onPress={onPress}
      accessibilityLabel={`Ver detalhes de ${product.title}`}
      testID={`product-${product.id}`}
    >
      <ProductImage source={source} resizeMode={FastImage.resizeMode.contain} />
      <Title numberOfLines={2}>{product.title}</Title>
      <Price>{priceFormat(product.price)}</Price>
    </Card>
  );
}

export default React.memo(ProductCard);
