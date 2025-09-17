import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "@store";
import AppNavigation from "@navigation";

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
