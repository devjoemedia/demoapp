import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  getDoc,
  onSnapshot,
  where,
  query,
} from "firebase/firestore";
import { auth, firestore } from "../firebase/config";

// Action: set auth state in redux store
export const setAuthenticated = (authenticated) => {
  return {
    type: "SET_AUTHENTICATED",
    payload: authenticated,
  };
};

// Action: set user to redux store
export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

// Action: set transactions to redux store
export const setTransactions = (transactions) => {
  return {
    type: "SET_TRANSACTIONS",
    payload: transactions,
  };
};

// Action: set campaigns to redux store
export const setCampaigns = (campaigns) => {
  return {
    type: "SET_CAMPAIGNS",
    payload: campaigns,
  };
};

// register user using firebase authentication
export const registerUser = async (email, password, userInfo) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredentials.user.uid;
    await saveUserDetails({ ...userInfo, email }, uid);

    const data = { uid, email, ...userInfo };

    return data;
  } catch (error) {
    throw error;
  }
};

// signin user using firebase authentication
export const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredentials.user;

    const docRef = doc(firestore, "users", user.uid);
    const docSnap = await getDoc(docRef);

    const userData = { ...docSnap.data(), email, uid: user.uid };

    if (docSnap.exists()) {
      return userData;
    }

    return userData;
  } catch (error) {
    throw error;
  }
};

// logout
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

// save user registration data to firebase
export const saveUserDetails = async (userInfo, uid) => {
  try {
    const userRef = collection(firestore, "users");

    await setDoc(doc(userRef, uid), userInfo);
  } catch (error) {
    console.log(error);
  }
};

// Saving Transaction  to Firebase
export const saveTransactionToFirebase = async (data) => {
  try {
    const transactionsRef = collection(firestore, "transactions");

    await setDoc(doc(transactionsRef, data.reference), data);
  } catch (err) {
    console.log(err);
  }
};

// Retreiving All Transactions from Firebase
export const getTransactionsFromFirebase = async () => {
  const transactionsRef = collection(firestore, "transactions");

  let transactions = [];

  const unsubscribe = onSnapshot(transactionsRef, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      transactions.push(doc.data());
    });
  });

  return transactions;
};

// Adding a campaign
export const addCampaign = async (newCampaign) => {
  try {
    await setDoc(doc(firestore, "campaigns", newCampaign.id), newCampaign);
  } catch (err) {
    console.log(err);
  }
};

//Editing a campaign
export const editCampaign = (id, campaignData) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
