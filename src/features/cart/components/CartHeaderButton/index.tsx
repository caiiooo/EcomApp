import React from "react";
import { Button } from "./styles";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@navigation/index";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Catalog">;

const CartIcon = (
  <FontAwesome6 name="basket-shopping" size={16} iconStyle="solid" />
);

export const CartHeaderButton = () => {
  const navigation = useNavigation<NavigationProp>();
  const handlePress = () => {
    navigation.navigate("Cart");
  };

  return (
    <Button onPress={handlePress} accessibilityLabel="Ir para o carrinho">
      {CartIcon}
    </Button>
  );
};
