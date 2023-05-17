import { View, Text, Image } from "react-native";
import moment from "moment";
import { styles } from "./CommentListItemStyle";

export const CommentListItem = ({ item, userId }) => {
  const ms = item.createdAt.seconds * 1000;
  const date = moment(new Date(ms)).format("DD MMMM, YYYY | hh:mm");
  console.log("date==<>", date);
  return (
    <>
      {userId === item.userId ? (
        <View style={styles.commentWrap}>
          <View style={styles.userTextWrap}>
            <Text style={styles.text}>{item.comment}</Text>
            <Text style={styles.userDate}>{date}</Text>
          </View>
          <View style={styles.userAvatarWrap}>
            <Image style={styles.avatar} source={{ uri: item.userAvatar }} />
          </View>
        </View>
      ) : (
        <View style={styles.commentWrap}>
          <View style={styles.avatarWrap}>
            <Image style={styles.avatar} source={{ uri: item.userAvatar }} />
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.text}>{item.comment}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      )}
    </>
  );
};
