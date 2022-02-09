import axios from "axios";
import { fetchQualification } from "@/@types/List/qualification"

interface documents {
  documents: [];
}

/** FIREBASE GET API URL */
const FIREBASE_GET_URL: string = `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/quals/`;

/** FIREBASE GET API URL */
const FIREBASE_POST_URL: string = `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/testdata`;

/** FIREBASE GET API */
export const getQualsData = async (): Promise<documents> => {
  const result = await axios
    .get(FIREBASE_GET_URL)
    .then((item) => item.data)
    .catch((error) => console.warn("エラー発生!: ", error));
  return result;
};

/** FIREBASE POST API */
export const postQualsData = async (data: fetchQualification) => {
  await axios
    .post(FIREBASE_POST_URL, {fields: data})
    .then((res) => console.log('POST成功!: ', res.data))
    .catch((error) => console.warn("エラー発生!: ", error));
};
