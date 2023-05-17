import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 88,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b3",
  },

  headerTitle: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
  },

  tabBar: {
    height: 84,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#b3b3b3",

    paddingHorizontal: 82,
    paddingTop: 9,
    paddingBottom: 34,
  },

  addBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",

    alignItems: "center",
    justifyContent: "center",
  },
});
