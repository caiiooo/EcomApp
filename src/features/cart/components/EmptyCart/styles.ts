import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Message = styled.Text`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

export const GoToCatalogButton = styled.TouchableOpacity`
  background-color: #1e90ff;
  padding: 12px 24px;
  border-radius: 8px;
`;

export const GoToCatalogText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
