import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  commentWrap: {
    flexDirection: "row",

    marginBottom: 24,
  },

  avatarWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: "hidden",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 16,
  },

  avatar: {
    width: 28,
    height: 28,
  },

  textWrap: {
    width: width - 2 * 16 - 28 - 16,
    backgroundColor: "#00000008",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,

    padding: 16,
  },

  text: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",

    marginBottom: 8,
  },

  date: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },

  userTextWrap: {
    width: width - 2 * 16 - 28 - 16,
    backgroundColor: "#00000008",
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,

    padding: 16,
  },

  userDate: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "left",
    color: "#BDBDBD",
  },

  userAvatarWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: "hidden",

    alignItems: "center",
    justifyContent: "center",

    marginLeft: 16,
  },
});
