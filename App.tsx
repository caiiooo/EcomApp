import { StatusBar, Text } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "@store";

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar />
        <Text>Inicio</Text>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
