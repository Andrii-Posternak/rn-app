import { TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

import { styles } from "./LoginStyle";

export const screenOptions = {
  headerStyle: styles.header,
  headerTitleAlign: "center",
  headerTitleStyle: styles.headerTitle,
  tabBarShowLabel: false,
  tabBarActiveTintColor: "#FF6C00",
  tabBarStyle: styles.tabBar,
};

export const postOptions = {
  headerStyle: styles.header,
  headerTitleAlign: "center",
  headerTitleStyle: styles.headerTitle,
  headerRight: () => (
    <TouchableOpacity
      style={{ right: 16 }}
      activeOpacity={0.5}
      onPress={() => console.log("log out")}
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
};

export const createPostOptions = {
  title: "Create posts",
  headerStyle: styles.header,
  headerTitleAlign: "center",
  headerTitleStyle: styles.headerTitle,
  headerLeft: () => (
    <TouchableOpacity
      style={{ left: 16 }}
      activeOpacity={0.5}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back" size={24} color="#212121" />
    </TouchableOpacity>
  ),
  tabBarIcon: () => (
    <View style={styles.addBtn}>
      <AntDesign name="plus" size={13} color="#ffffff" />
    </View>
  ),
  tabBarStyle: { display: "none" },
};

export const profileOptions = {
  headerShown: false,
  tabBarIcon: ({ focused, color }) => (
    <Feather name="user" size={24} color={focused ? color : "#212121cc"} />
  ),
};
