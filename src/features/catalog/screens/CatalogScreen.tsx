import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@navigation/index";

type CatalogScreenNavigation = NativeStackNavigationProp<
  RootStackParamList,
  "Catalog"
>;

export default function CatalogScreen() {
  const navigation = useNavigation<CatalogScreenNavigation>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetail", { id: 1 })}
    >
      <Text>Ver Produto</Text>
    </TouchableOpacity>
  );
}
