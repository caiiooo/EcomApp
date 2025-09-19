import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import linking from "./linking";
import { CartHeaderButton } from "@features/cart/components/CartHeaderButton/CartHeaderButton";
import CatalogScreen from "@features/catalog/screens/CatalogScreen";
import ProductDetailScreen from "@features/productDetail/screens/ProductScreen";
import CartScreen from "@features/cart/screens/CartScreen";

export type RootStackParamList = {
  Catalog: undefined;
  ProductDetail: { id: number };
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Catalog">
        <Stack.Screen
          name="Catalog"
          component={CatalogScreen}
          options={() => ({
            title: "Catálogo",
            headerRight: CartHeaderButton,
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{
            title: "Detalhes do Produto",
            headerRight: CartHeaderButton,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Carrinho" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
