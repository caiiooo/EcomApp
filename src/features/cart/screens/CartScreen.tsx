import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { CartItemDetail, CartTotal, EmptyCart } from '../components';
import { Container } from './CartScreen.styles';
import { CartItem } from '@types';

export default function CartScreen() {
  const items = useSelector(
    (state: RootState) => state.cart.items,
    shallowEqual,
  );

  const total = React.useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const renderItem = useCallback(
    ({ item }: { item: CartItem }) => <CartItemDetail {...item} />,
    [],
  );

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Container>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
      <CartTotal total={total} />
    </Container>
  );
}
