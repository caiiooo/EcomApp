import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth / 2 - 24; // 2 colunas com espaçamento

export const Card = styled.View`
  background: #fff;
  border-radius: 8px;
  margin: 4px;
  padding: 12px;
  width: ${cardWidth}px;
`;

export const ViewDetailButton = styled.TouchableOpacity`
  background-color: #1976d2;
  padding: 4px;
  border-radius: 8px;
  align-items: center;
`;

export const ViewDetailButtonText = styled.Text`
  color: #fff;
  /* font-size: 16px; */
  font-weight: bold;
`;

export const ProductImage = styled(FastImage)`
  width: 100px;
  height: 100px;
  margin-bottom: 8px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const Price = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;
