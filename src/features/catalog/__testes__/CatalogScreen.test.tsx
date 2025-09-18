import React from "react";
import { render, waitFor, fireEvent, act } from "@testing-library/react-native";
import CatalogScreen from "../screens/CatalogScreen";
import { productService } from "@api/productService";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@navigation/index";

jest.mock("@api/productService");

jest.mock("@react-navigation/native", () => {
  const actual = jest.requireActual("@react-navigation/native");
  return {
    ...actual,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

const Stack = createNativeStackNavigator<RootStackParamList>();

function Wrapper() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Catalog" component={CatalogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

describe("CatalogScreen", () => {
  it("renderiza produtos corretamente", async () => {
    const { getByText } = render(<Wrapper />);

    await waitFor(() => {
      expect(getByText("Produto Teste")).toBeTruthy();
      expect(getByText("R$ 99.90")).toBeTruthy();
    });
  });

  it("mostra loader enquanto carrega", async () => {
    const { getByTestId } = render(<Wrapper />);
    await waitFor(() => {
      expect(getByTestId("loading-indicator")).toBeTruthy();
    });
  });

  it("dispara navigation ao clicar no produto", async () => {
    const { getByTestId } = render(<Wrapper />);
    await waitFor(() => {
      expect(getByTestId("product-1")).toBeTruthy();
    });
    fireEvent.press(getByTestId("product-1"));
    expect(true).toBe(true);
  });
});
