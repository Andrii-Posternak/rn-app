import { useEffect, useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { authSignUp } from "../../redux/auth/authOperation";
import { AvatarForm } from "../../components/AvatarForm/AvatarForm";
import { styles } from "./RegisterStyle";
import { uploadAvatarToServer } from "../../api/uploadAvatarToServer";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const Register = () => {
  //form
  const [formData, setFormData] = useState(initialState);
  const [userAvatar, setUserAvatar] = useState(null);

  // keyboard
  const [showPassword, setShowPassword] = useState(true);
  const [padding, setPadding] = useState(80);

  //input
  const [isInputLoginInFocus, setIsInputLoginInFocus] = useState(false);
  const [isInputEmailInFocus, setIsInputEmailInFocus] = useState(false);
  const [isInputPasswordInFocus, setIsInputPasswordInFocus] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleChangeLogin = (value) =>
    setFormData((prevState) => ({ ...prevState, login: value }));

  const handleChangeEmail = (value) =>
    setFormData((prevState) => ({ ...prevState, email: value }));

  const handleChangePassword = (value) =>
    setFormData((prevState) => ({ ...prevState, password: value }));

  const handleFocusLogin = () => {
    setIsInputLoginInFocus(true);
  };

  const handleFocusEmail = () => {
    setIsInputEmailInFocus(true);
  };

  const handleFocusPassword = () => {
    setIsInputPasswordInFocus(true);
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const hasData = () => {
    if (formData.login && formData.email && formData.password && userAvatar) {
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    if (!hasData()) return alert("Add photo and fill in all fields");
    try {
      setFormData(initialState);
      setUserAvatar(null);
      hideKeyboard();
      const userAvatarUrl = await uploadAvatarToServer(userAvatar);
      dispatch(authSignUp({ ...formData, userAvatar: userAvatarUrl }));
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const showKeyboard = Keyboard.addListener("keyboardDidShow", (e) => {
      const keyboardHeight = e.endCoordinates.height;
      setPadding(keyboardHeight + 16);
    });
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setPadding(80);
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ImageBackground
        style={styles.image}
        source={require("../../images/background.png")}
      >
        <ScrollView style={styles.scrollBox}>
          <View style={{ ...styles.form, paddingBottom: padding }}>
            <AvatarForm userAvatar={userAvatar} setUserAvatar={setUserAvatar} />
            <Text style={styles.titleForm}>Registration</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={[styles.input, isInputLoginInFocus && styles.inputFocus]}
                maxLength={20}
                cursorColor="#212121"
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                value={formData.login}
                onChangeText={handleChangeLogin}
                onFocus={handleFocusLogin}
                onBlur={() => setIsInputLoginInFocus(false)}
              />

              <TextInput
                style={[styles.input, isInputEmailInFocus && styles.inputFocus]}
                maxLength={20}
                cursorColor="#212121"
                placeholder="Email"
                placeholderTextColor="#BDBDBD"
                value={formData.email}
                onChangeText={handleChangeEmail}
                onFocus={handleFocusEmail}
                onBlur={() => setIsInputEmailInFocus(false)}
              />

              <View style={styles.inputWrap}>
                <TextInput
                  style={[
                    styles.input,
                    isInputPasswordInFocus && styles.inputFocus,
                  ]}
                  maxLength={20}
                  cursorColor="#212121"
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={showPassword}
                  value={formData.password}
                  onChangeText={handleChangePassword}
                  onFocus={handleFocusPassword}
                  onBlur={() => setIsInputPasswordInFocus(false)}
                />
                <TouchableOpacity
                  style={styles.inputBtn}
                  activeOpacity={0.8}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.inputBtnTitle}>
                    {showPassword ? "Show" : "Hide"}
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={handleSubmit}
            >
              <Text style={styles.btnTitle}>Registration</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.navigate}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
