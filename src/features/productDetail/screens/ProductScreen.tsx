import React, { useCallback } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useProductDetail } from "../hooks/useProductDetail";
import ProductInfo from "../components/ProductInfo";
import { ActivityIndicator, View, Text } from "react-native";
import { RootStackParamList } from "@navigation/index";
import { addToCart } from "@features/cart/cartSlice";
import { LoadingView } from "./ProductScreen.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProductDetailScreenProps = RouteProp<RootStackParamList, "ProductDetail">;
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProductDetail"
>;

export default function ProductDetailScreen() {
  const route = useRoute<ProductDetailScreenProps>();
  const { id } = route.params;
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();
  const { product, loading } = useProductDetail(id);

  const handleAddToCart = useCallback(() => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
    navigation.navigate("Cart");
  }, [product, dispatch, navigation]);

  if (loading) {
    return (
      <LoadingView>
        <ActivityIndicator size="large" testID="loading-indicator" />
      </LoadingView>
    );
  }

  if (!product) {
    return (
      <View>
        <Text>Produto não encontrado</Text>
      </View>
    );
  }

  return <ProductInfo product={product} onAddToCart={handleAddToCart} />;
}
