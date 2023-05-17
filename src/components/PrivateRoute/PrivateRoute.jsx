import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../Screens/Home/Home";
import { CommentsScreen } from "../../Screens/CommentsScreen/CommentsScreen";
import { MapScreen } from "../../Screens/MapScreen/MapScreen";
import { styles } from "../../Screens/Home/HomeStyle";

const MainStack = createStackNavigator();

export const PrivateRoute = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        options={{
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitle,
        }}
        name="Comments"
        component={CommentsScreen}
      />
      <MainStack.Screen
        options={{
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitle,
        }}
        name="Map"
        component={MapScreen}
      />
    </MainStack.Navigator>
  );
};
