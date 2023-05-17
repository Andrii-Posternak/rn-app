import { useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { authSignOut } from "../../redux/auth/authOperation";
import { PostsScreen } from "../PostsScreen/PostsScreen";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import { styles } from "./HomeStyle";

const HomeTab = createBottomTabNavigator();
let isCameraOpen;

export const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();

  if (route.params) {
    isCameraOpen = route.params.isCameraOpen;
  }

  const logout = () => {
    dispatch(authSignOut());
  };

  return (
    <HomeTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerStyle: styles.header,
        headerTitleAlign: "center",
        headerTitleStyle: styles.headerTitle,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
        tabBarStyle: styles.tabBar,
      }}
    >
      <HomeTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ right: 16 }}
              activeOpacity={0.5}
              onPress={logout}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? color : "#212121cc"}
            />
          ),
        }}
      />

      <HomeTab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          headerShown: !isCameraOpen,
          title: "Create post",
          headerLeft: () => (
            <TouchableOpacity
              style={{ left: 16 }}
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#212121cc" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => (
            <View style={styles.addBtn}>
              <AntDesign name="plus" size={13} color="#ffffff" />
            </View>
          ),
          tabBarStyle: { display: "none" },
        }}
      />

      <HomeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? color : "#212121cc"}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};
