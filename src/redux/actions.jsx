import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { auth, firestore, storage } from "../firebase/config";
import { ref, uploadBytes } from "firebase/storage";
import { firebaseConnect } from "react-redux-firebase";
import axios from "axios";

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

export const setTransactions = (transactions) => {
  return {
    type: "SET_TRANSACTIONS",
    payload: transactions,
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
    await saveUserDetails(userInfo, uid);

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

export const saveUserDetails = async (userInfo, uid) => {
  try {
    await setDoc(doc(firestore, "users", uid), userInfo);
  } catch (error) {
    console.log(error);
  }
};

export const saveTransaction = async (data) => {
  try {
    await setDoc(doc(firestore, "transactions", data.reference), data);
  } catch (err) {
    console.log(err);
  }
};

export const getCampaignTransactions = async (campaignId) => {
  const q = query(
    collection(firestore, "transactions"),
    where("campaignId", "==", campaignId)
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

export const getTransactions = async () => {
  try {
    let { data } = await axios.get("https://api.paystack.co/transaction", {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_PAYSTACK_SECRET_KEY,
      },
    });
    // .then((response) => {
    //   let data = response.data.data.map((item) => {
    //     return {
    //       amount: item.amount,
    //       createdAt: item.createdAt,
    //       currency: item.currency,
    //       id: item.id,
    //       email: item.customer.email,
    //       reference: item.reference,
    //       ...item.metadata,
    //     };
    //   });

    //   return data;
    // })
    // .catch((err) => console.log(err));
    return data;
  } catch (err) {
    console.log(err);
  }
};
