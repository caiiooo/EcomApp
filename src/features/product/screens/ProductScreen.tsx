import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@navigation/index";

type ProductScreenNavigation = NativeStackNavigationProp<
  RootStackParamList,
  "ProductDetail"
>;

export default function ProductScreen() {
  const navigation = useNavigation<ProductScreenNavigation>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Catalog")}>
      <Text>Ver Catalogo</Text>
    </TouchableOpacity>
  );
}
