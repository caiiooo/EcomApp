import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Product } from "../types";
import FastImage from "react-native-fast-image";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 2 - 24; // 2 colunas com espaçamento

interface Props {
  product: Product;
  onPress: () => void;
}

const Card = styled.TouchableOpacity`
  background: #fff;
  border-radius: 8px;
  margin: 8px;
  padding: 12px;
  /* elevation: 2; */
  width: ${cardWidth}px;
  /* align-items: left; */
`;

const ProductImage = styled(FastImage)`
  width: 100px;
  height: 100px;
  margin-bottom: 8px;
  align-self: center;
`;

const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

const Price = styled.Text`
  font-size: 14px;
  margin-top: 5px;
`;

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
