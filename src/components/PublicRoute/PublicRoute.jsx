import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Register } from "../../Screens/RegistrationScreen/Register";
import { Login } from "../../Screens/LoginScreen/Login";

const AuthStack = createStackNavigator();

export const PublicRoute = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
