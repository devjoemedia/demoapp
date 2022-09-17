import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useGetCampaign = (campaignId) => {
  const [campaigns, setCampaigns] = useState([]);
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      let campaignsRef = collection(firestore, "campaigns", );
      const q = query(
        campaignsRef,
        where('withdrawn', '==', false)
        // limit(5)
      )

      if (campaignId) {
        const unsub = onSnapshot(
          doc(firestore, "campaigns", campaignId),
          (doc) => {
            setCampaign(doc.data());
          }
        );
      }

      const unsub = onSnapshot(q, (querySnapshot) => {
        let results = [];
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });
        setCampaigns(results);
      });
    };

    fetchData();
  }, [campaignId]);

  return { campaigns, campaign };
};

export default useGetCampaign;
