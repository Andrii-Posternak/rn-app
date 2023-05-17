import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  bgnImage: {
    flex: 1,
    justifyContent: "flex-end",
  },

  scrollBox: {
    flexGrow: 0,
  },

  screenContainer: {
    width: "100%",
    height: height - 84 - 1 - 60 - 87,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 44,
  },

  userName: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",

    marginBottom: 32,
  },

  noPost: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#212121",

    marginTop: 100,
  },

  logout: {
    position: "absolute",
    top: 22,
    right: 16,
  },

  //post
  postContainer: {
    marginBottom: 32,
  },

  imageWrap: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    overflow: "hidden",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 8,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textDescription: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",

    marginBottom: 8,
  },

  postInfoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  socialWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },

  infoWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  likeIcon: {
    marginBottom: 5,
  },

  textSocial: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  textLocation: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
});
