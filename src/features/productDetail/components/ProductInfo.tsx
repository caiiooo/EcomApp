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
import { priceFormat } from "@shared/utils/format";

type ProductInfoProps = {
  product: Product;
  onAddToCart: () => void;
};

function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
  const imageSource = React.useMemo(() => ({ uri: product.image }), [
    product.image,
  ]);

  return (
    <Container>
      <ProductImage
        source={imageSource}
        resizeMode={FastImage.resizeMode.contain}
        testID="product-image"
      />
      <Title>{product.title}</Title>
      <Price>{priceFormat(product.price)}</Price>
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

export default React.memo(ProductInfo);
