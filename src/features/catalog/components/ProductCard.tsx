import React from "react";
import { Product } from "@types";
import { Card, Price, ProductImage, Title } from "./ProductCard.styles";
import FastImage from "react-native-fast-image";

interface Props {
  product: Product;
  onPress: () => void;
}

function ProductCard({ product, onPress }: Props) {
  return (
    <Card
      onPress={onPress}
      accessibilityLabel={`Ver detalhes de ${product.title}`}
      testID={`product-${product.id}`}
    >
      <ProductImage
        source={{
          uri: product.image,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Title numberOfLines={2}>{product.title}</Title>
      <Price>R$ {product.price.toFixed(2)}</Price>
    </Card>
  );
}

export default React.memo(ProductCard);
