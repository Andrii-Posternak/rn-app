import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

export const uploadAvatarToServer = async (image) => {
  try {
    const response = await fetch(image);
    const file = await response.blob();

    const uniqueID = Date.now().toString();
    const storageRef = ref(storage, `userAvatar/${uniqueID}`);

    const res = await uploadBytes(storageRef, file);

    // get url
    const userAvatarUrl = await getDownloadURL(storageRef);
    console.log("uniqueID==>", uniqueID);
    return userAvatarUrl;
  } catch (error) {
    alert(error.message);
  }
};

export const deleteImageFromServer = async (image) => {
  const idx = image.indexOf("?");
  const uniqueID = image.slice(idx - 13, idx);

  const desertRef = ref(storage, `userAvatar/${uniqueID}`);

  await deleteObject(desertRef);
};
