import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../cartSlice";
import {
  ItemContainer,
  Title,
  Price,
  QuantityRow,
  Button,
  ProductImage,
  DetailColumn,
  CartItemRow,
  QuantityText,
} from "./styles";
import { CartItem } from "@types";
import FastImage from "react-native-fast-image";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { priceFormat } from "@shared/utils/format";

export const CartItemDetail = React.memo(function CartItemDetail({
  id,
  title,
  price,
  quantity,
  image,
}: CartItem) {
  const dispatch = useDispatch();

  const handleDecrement = useCallback(() => dispatch(decrementQuantity(id)), [
    dispatch,
    id,
  ]);
  const handleIncrement = useCallback(() => dispatch(incrementQuantity(id)), [
    dispatch,
    id,
  ]);
  const handleRemove = useCallback(() => dispatch(removeFromCart(id)), [
    dispatch,
    id,
  ]);

  return (
    <ItemContainer>
      <CartItemRow>
        <ProductImage
          source={{ uri: image, priority: FastImage.priority.low }}
          resizeMode={FastImage.resizeMode.contain}
          testID="product-image"
        />
        <DetailColumn>
          <Title>{title}</Title>
          <Price>{priceFormat(price * quantity)}</Price>
          <QuantityRow>
            <Button onPress={handleDecrement}>
              <FontAwesome6 name="minus" size={15} iconStyle="solid" />;
            </Button>
            <QuantityText>{quantity}</QuantityText>
            <Button onPress={handleIncrement}>
              <FontAwesome6 name="plus" size={15} iconStyle="solid" />;
            </Button>
            <Button onPress={handleRemove}>
              <FontAwesome6 name="trash" size={15} iconStyle="solid" />;
            </Button>
          </QuantityRow>
        </DetailColumn>
      </CartItemRow>
    </ItemContainer>
  );
});
