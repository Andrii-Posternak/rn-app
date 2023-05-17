import { useState } from "react";
import { styles } from "./AvatarFormStyle";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const AvatarForm = ({ userAvatar, setUserAvatar }) => {
  const uploadAvatar = async () => {
    try {
      if (userAvatar) {
        return setUserAvatar(null);
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setUserAvatar(result.assets[0].uri);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.avatarBox}>
      <Image
        style={styles.avatarImage}
        // source={require("../../images/background.png")}
        source={{ uri: userAvatar }}
        alt="avatar"
      />
      <TouchableOpacity
        style={[styles.avatarBtnWrap, userAvatar && styles.avatarBtnWrapActive]}
        activeOpacity={0.8}
        // onPress={() => setUserAvatar(!userAvatar)}
        onPress={uploadAvatar}
      >
        <Text style={[styles.avatarBtn, userAvatar && styles.avatarBtnActive]}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};
