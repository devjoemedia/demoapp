import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useGetTotalDonations = (userId) => {
  const [donationsMade, setDonationsMade] = useState([]);
  const [donationsReceived, setDonationsReceived] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const transactionsRef = collection(firestore, "transactions");

      const q = query(
        transactionsRef,
        where("userId", "==", userId)
        // Todo
        // 1. add campagin creator id to transactions
        // 2. add donor id to transactions
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let results = [];
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });

        let total = results.reduce((prev, curr) => prev + curr.amount, 0);

        setDonationsReceived(total / 100);
        setDonationsMade(results.sort((a, b) => b.createdAt - a.createdAt));
      });
    };

    fetchData();
  }, [userId]);

  return { donationsMade, donationsReceived };
};

export default useGetTotalDonations;
