import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  Button,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { db } from "../../firebase/config";
import {
  selectUserAvatar,
  selectUserEmail,
  selectUserName,
} from "../../redux/auth/authSlice";
import { styles } from "./PostsScreenStyle";

export const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  const userAvatar = useSelector(selectUserAvatar);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  // useEffect(() => {
  //   (async () => {
  //     setPosts(await getAllPost());
  //   })();
  // }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     (async () => {
  //       setPosts(await getAllPost());
  //     })();
  //   }, [])
  // );

  useFocusEffect(
    useCallback(() => {
      console.log("useeffect postScreen");
      getAllPost();
      // }, [getDocs(collection(db, "posts"))])
    }, [])
  );

  const getAllPost = async () => {
    try {
      const q = query(collection(db, "posts"), orderBy("createdAt"));
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

  // const getAllPost = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "posts"));

  //     const posts = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       postId: doc.id,
  //     }));

  //     return posts;
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // const countLike = posts.likeCount;
  // };

  const updateLikeCount = async (post) => {
    const docRef = doc(db, "posts", post.postId);

    await updateDoc(docRef, {
      likes: post.likes + 1,
    });
    console.log("updateLikeCount");
  };

  return (
    <View style={styles.container}>
      {!posts.length && <Text style={styles.noPost}>No posts yet!</Text>}

      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        ListHeaderComponent={
          <View style={styles.userInfoWrap}>
            <View style={styles.avatarWrap}>
              <Image style={styles.avatar} source={{ uri: userAvatar }} />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{userName}</Text>
              <Text style={styles.userEmail}>{userEmail}</Text>
            </View>
          </View>
        }
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
                      <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
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
  );
};
