import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  orderBy,
  doc,
  query,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Place } from "./types";

const app = initializeApp({
  apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_FIREBASE_APP_ID,
});

export const db = getFirestore(app);

export async function getRestaurants(): Promise<Place[]> {
  const ref = collection(db, "eats_restaurants");
  const queryRef = query(ref, orderBy("title"));
  const docs = await getDocs(queryRef);
  return docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Place[];
}

export async function getRestaurantById(id: string): Promise<Place> {
  const ref = doc(db, "eats_restaurants", id);
  const document = await getDoc(ref);
  return { id: document.id, ...document.data() } as Place;
}
