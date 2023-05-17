import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: "#ffffff",
  },

  imageWrap: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    overflow: "hidden",

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 32,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  noComment: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#212121",

    marginTop: 100,
  },

  commentContainer: {
    flexGrow: 1,

    marginBottom: 24,
  },

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

  inputWrap: {
    position: "relative",

    // marginTop: "auto",
  },

  newComment: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",

    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 50,

    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  inFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#ffffff",
  },

  sendBtn: {
    position: "absolute",
    top: "50%",
    right: 8,
    transform: [{ translateY: -17 }],

    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FF6C00",

    justifyContent: "center",
    alignItems: "center",
  },
});
