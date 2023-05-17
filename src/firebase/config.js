import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_lGXbi1IAgrAvYdexNk_28xvUIoVRdcc",
  authDomain: "react-native-hw-4f66c.firebaseapp.com",
  projectId: "react-native-hw-4f66c",
  storageBucket: "react-native-hw-4f66c.appspot.com",
  messagingSenderId: "699871142072",
  appId: "1:699871142072:web:72ec85e41bab444404d44d",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
