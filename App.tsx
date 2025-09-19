import { Provider } from "react-redux";
import { store } from "@store";
import AppNavigation from "@navigation";

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
