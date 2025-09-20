import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding-bottom: 12px;
`;

export const CartItemRow = styled.View`
  flex-direction: row;
`;

export const DetailColumn = styled.View`
  flex-direction: column;
  width: 210px;
  margin-left: 20px;
`;

export const ProductImage = styled(FastImage)`
  width: 125;
  height: 125;
  margin-bottom: 8px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5;
`;
export const QuantityText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10;
  margin-right: 10;
`;

export const Price = styled.Text`
  font-size: 25px;
  margin-bottom: 20;
`;

export const QuantityRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Button = styled.TouchableOpacity`
  padding: 6px 10px;
  background-color: #eee;
  border-radius: 6px;
  margin: 0 4px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
`;
