import React, { useMemo } from "react";
import { Product } from "@types";
import {
  Card,
  Price,
  ProductImage,
  Title,
  ViewDetailButton,
  ViewDetailButtonText,
} from "./ProductCard.styles";
import FastImage from "react-native-fast-image";
import { priceFormat } from "@shared/utils/format";

interface Props {
  product: Product;
  onPress: () => void;
}

export const ProductCard = React.memo(({ product, onPress }: Props) => {
  const source = useMemo(
    () => ({
      uri: product.image,
      cache: FastImage.cacheControl.immutable,
    }),
    [product.image]
  );

  return (
    <Card>
      <ProductImage source={source} resizeMode={FastImage.resizeMode.contain} />
      <Title numberOfLines={2}>{product.title}</Title>
      <Price>{priceFormat(product.price)}</Price>
      <ViewDetailButton
        onPress={onPress}
        accessibilityLabel={`Ver detalhes de ${product.title}`}
        testID={`product-${product.id}`}
      >
        <ViewDetailButtonText>Ver Detalhes</ViewDetailButtonText>
      </ViewDetailButton>
    </Card>
  );
});
