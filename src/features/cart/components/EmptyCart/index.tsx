import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/index';
import {
  Container,
  GoToCatalogButton,
  GoToCatalogText,
  Message,
} from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

export const EmptyCart = React.memo(function EmptyCart() {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = useCallback(
    () => navigation.navigate('Catalog'),
    [navigation],
  );

  return (
    <Container>
      <Message>Seu carrinho está vazio</Message>
      <GoToCatalogButton onPress={handlePress}>
        <GoToCatalogText>Ir para o Catálogo</GoToCatalogText>
      </GoToCatalogButton>
    </Container>
  );
});
