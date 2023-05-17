import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatarBox: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: (-120 + 32) / 2 }],

    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },

  avatarBtnWrap: {
    position: "absolute",
    bottom: 14 + 25 / 2,
    right: -25 / 2,

    alignItems: "center",
    justifyContent: "center",

    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 25 / 2,
    backgroundColor: "#ffffff",
  },

  avatarBtnWrapActive: {
    borderColor: "#BDBDBD",
  },

  avatarBtn: {
    color: "#FF6C00",
    fontSize: 16,
    lineHeight: 19,
    // fontWeight: "thin",
    transform: [{ scale: 1.7 }],
  },

  avatarBtnActive: {
    color: "#BDBDBD",
    transform: [{ rotate: "45deg" }, { scale: 1.7 }],
  },
});
