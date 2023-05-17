import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#ffffff",
  },

  //user info
  userInfoWrap: {
    flexDirection: "row",
    marginBottom: 32,
  },

  avatarWrap: {
    width: 60,
    height: 60,
    borderRadius: 16,
    overflow: "hidden",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 8,
  },

  avatar: {
    width: 60,
    height: 60,
  },

  userInfo: {
    justifyContent: "center",
  },

  userName: {
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },

  userEmail: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121cc",
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
