import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useGetCampaignTransactions = (campaignId) => {
  const [transactions, setTransactions] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const transactionsRef = collection(firestore, "transactions");

      const q = query(
        transactionsRef,
        where("campaignId", "==", campaignId)
        // limit(5)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let results = [];
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });

        let total = results.reduce((prev, curr) => prev + curr.amount, 0);

        setTotalDonations(total / 100);
        setTransactions(results.sort((a, b) => b.createdAt - a.createdAt));
      });
    };

    fetchData();
  }, [campaignId]);

  return { transactions, totalDonations };
};

export default useGetCampaignTransactions;
