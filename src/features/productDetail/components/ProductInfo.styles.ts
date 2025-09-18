import styled from "styled-components/native";
import FastImage from "react-native-fast-image";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Price = styled.Text`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const ProductImage = styled(FastImage)`
  width: 100;
  height: 250;
  margin-bottom: 8px;
  align-self: center;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #1976d2;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
