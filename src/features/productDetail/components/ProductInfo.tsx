import React from "react";
import FastImage from "react-native-fast-image";
import { Product } from "@types";
import {
  Button,
  ButtonText,
  Container,
  Description,
  Price,
  ProductImage,
  Title,
} from "./ProductInfo.styles";

type ProductInfoProps = {
  product: Product;
  onAddToCart: () => void;
};

export function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
  return (
    <Container>
      <ProductImage
        source={{ uri: product.image }}
        resizeMode={FastImage.resizeMode.contain}
        testID="product-image"
      />
      <Title>{product.title}</Title>
      <Price>R$ {product.price.toFixed(2)}</Price>
      <Description>{product.description}</Description>

      <Button
        onPress={onAddToCart}
        accessibilityLabel={`Adicionar ${product.title} ao carrinho`}
        testID="add-to-cart-button"
      >
        <ButtonText>Adicionar ao Carrinho</ButtonText>
      </Button>
    </Container>
  );
}
