import { db } from "../utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  doc,
} from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const userItemsCollectionRef = collection(db, `users/${userId}/items`);

    const querySnapshot = await getDocs(userItemsCollectionRef);

    const items = [];

    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    console.info("successfully fetched items:");
    console.info(items);
    console.info(userId);
    return items;
  } catch (error) {
    console.error("failed to get items for user " + userId, error);
    return [];
  }
};

export async function addItem(userId, item) {
  try {
    const userItemsCollectionRef = collection(
      doc(db, "users", userId),
      "items"
    );
    const newItemRef = await addDoc(userItemsCollectionRef, item);

    console.info("successfully added item");
    return newItemRef.id;
  } catch (error) {
    console.error("Error adding item: " + item, error);
  }
}
