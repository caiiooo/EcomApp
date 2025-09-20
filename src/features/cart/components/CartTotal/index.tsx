import React from 'react';
import { TotalText } from './styles';

type CartTotalProps = {
  total: number;
};

export const CartTotal = React.memo(function CartTotal({
  total,
}: CartTotalProps) {
  return <TotalText>Total: R$ {total.toFixed(2)}</TotalText>;
});
