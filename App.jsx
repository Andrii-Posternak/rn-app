import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { store } from "./src/redux/store";
import { Main } from "./src/components/Main/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        size="large"
        color="#FF6C00"
      />
    );
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
