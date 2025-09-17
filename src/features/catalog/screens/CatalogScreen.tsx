import React from "react";
import { FlatList, ActivityIndicator, Text } from "react-native";
import ProductCard from "../components/ProductCard";
import { useCatalog } from "../hooks/useCatalog";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@navigation/index";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Nav = NativeStackNavigationProp<RootStackParamList, "Catalog">;

export default function CatalogScreen() {
  const { products, loading, error } = useCatalog();
  const navigation = useNavigation<Nav>();

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() => navigation.navigate("ProductDetail", { id: item.id })}
        />
      )}
      numColumns={2}
      contentContainerStyle={{ padding: 16 }}
      initialNumToRender={10} 
      maxToRenderPerBatch={10} 
      windowSize={5}
    />
  );
}
