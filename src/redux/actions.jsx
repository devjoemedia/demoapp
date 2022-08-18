import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore, storage } from "../firebase/config";
import { ref, uploadBytes } from "firebase/storage";

export const setAuthenticated = (authenticated) => {
  return {
    type: "SET_AUTHENTICATED",
    payload: authenticated,
  };
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const registerUser = async (email, password, userInfo) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredentials.user.uid;
    await userDetails(userInfo, uid);

    return userCredentials.user;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredentials.user;

    return user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const userDetails = async (userInfo, uid) => {
  try {
    await setDoc(doc(firestore, "users", uid), userInfo);
  } catch (error) {
    console.log(error);
  }
};
