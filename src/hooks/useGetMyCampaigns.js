import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useGetMyCampaigns = (userId) => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      let campaignsRef = collection(firestore, "campaigns");

      let q = query(campaignsRef, where("userId", "==", userId));

      let results = [];

      const unsub = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });
        setCampaigns(results);
      });
    };

    fetchData();
  }, [userId, campaigns]);

  return { campaigns };
};

export default useGetMyCampaigns;
