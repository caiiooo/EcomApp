import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useProductDetail } from "../hooks/useProductDetail";
import { ProductInfo } from "../components/ProductInfo";
import { ActivityIndicator, View, Text } from "react-native";
import { RootStackParamList } from "@navigation/index";

type ProductDetailScreenProps = RouteProp<RootStackParamList, "ProductDetail">;

export default function ProductDetailScreen() {
  const route = useRoute<ProductDetailScreenProps>();
  const { id } = route.params;
  const dispatch = useDispatch();
  const { product, loading } = useProductDetail(id);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" testID="loading-indicator" />
      </View>
    );
  }

  if (!product) {
    return (
      <View>
        <Text>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <ProductInfo
      product={product}
      // onAddToCart={() => dispatch(addToCart(product))}
    />
  );
}
