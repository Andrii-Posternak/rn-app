import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  EvilIcons,
  SimpleLineIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { db } from "../../firebase/config";
import {
  selectUserAvatar,
  selectUserId,
  selectUserName,
} from "../../redux/auth/authSlice";
import { authSignOut } from "../../redux/auth/authOperation";
import { uploadAvatarToServer } from "../../api/uploadAvatarToServer";
import { AvatarForm } from "../../components/AvatarForm/AvatarForm";
import { styles } from "./ProfileScreenStyle";

export const ProfileScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [userAvatar, setUserAvatar] = useState(useSelector(selectUserAvatar));

  const userName = useSelector(selectUserName);
  const userId = useSelector(selectUserId);

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      getAllPost();
      // }, [getDocs(collection(db, "posts"))])
    }, [])
  );

  const getAllPost = async () => {
    try {
      const q = query(collection(db, "posts"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      // const querySnapshot = await getDocs(collection(db, "posts"));

      const posts = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        postId: doc.id,
      }));

      setPosts(posts);
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = () => {
    dispatch(authSignOut());
  };

  const updateLikeCount = async (post) => {
    const docRef = doc(db, "posts", post.postId);

    await updateDoc(docRef, {
      likes: post.likes + 1,
    });
  };

  return (
    <ImageBackground
      style={styles.bgnImage}
      source={require("../../images/background.png")}
    >
      {/* <ScrollView style={styles.scrollBox}> */}
      <View style={styles.screenContainer}>
        <AvatarForm userAvatar={userAvatar} setUserAvatar={setUserAvatar} />
        <Text style={styles.userName}>{userName}</Text>

        <TouchableOpacity
          style={styles.logout}
          activeOpacity={0.5}
          onPress={logout}
        >
          <MaterialIcons name="logout" size={24} color="#BDBDBD" />
        </TouchableOpacity>

        {!posts.length && (
          <Text style={styles.noPost}>You do not have posts yet!</Text>
        )}

        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <View style={styles.imageWrap}>
                <Image style={styles.image} source={{ uri: item.photoUrl }} />
              </View>
              <Text style={styles.textDescription}>{item.description}</Text>

              <View style={styles.postInfoWrap}>
                <View style={styles.socialWrap}>
                  <View style={styles.infoWrap}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Comments", {
                          photo: item.photoUrl,
                          postId: item.postId,
                        })
                      }
                    >
                      {item.comments > 0 ? (
                        <FontAwesome name="comment" size={24} color="#FF6C00" />
                      ) : (
                        <FontAwesome
                          name="comment-o"
                          size={24}
                          color="#BDBDBD"
                        />
                      )}
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.textSocial,
                        item.comments > 0 && { color: "#212121" },
                      ]}
                    >
                      {item.comments}
                    </Text>
                  </View>

                  <View style={styles.infoWrap}>
                    <TouchableOpacity
                      style={styles.likeIcon}
                      onPress={() => updateLikeCount(item)}
                    >
                      {item.likes > 0 ? (
                        <AntDesign name="like2" size={24} color="#FF6C00" />
                      ) : (
                        <AntDesign name="like2" size={24} color="#BDBDBD" />
                      )}
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.textSocial,
                        item.likes > 0 && { color: "#212121" },
                      ]}
                    >
                      {item.likes}
                    </Text>
                  </View>
                </View>

                <View style={styles.infoWrap}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Map", {
                        description: item.description,
                        location: item.location,
                      })
                    }
                  >
                    <SimpleLineIcons
                      name="location-pin"
                      size={24}
                      color="#BDBDBD"
                    />
                  </TouchableOpacity>
                  <Text style={styles.textLocation}>{item.location.name}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      {/* </ScrollView> */}
    </ImageBackground>
  );
};
