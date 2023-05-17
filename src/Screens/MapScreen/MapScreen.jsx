import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./MapScreenStyle";

export const MapScreen = ({ route }) => {
  const { description, location } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title={description}
        />
      </MapView>
    </View>
  );
};
