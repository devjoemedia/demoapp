import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://api.paystack.co/transaction", {
          headers: {
            Authorization:
              "Bearer " + process.env.REACT_APP_PAYSTACK_SECRET_KEY,
          },
        })
        .then((response) => {
          let data = response.data.data.map((item) => {
            return {
              amount: item.amount,
              createdAt: item.createdAt,
              currency: item.currency,
              id: item.id,
              email: item.customer.email,
              reference: item.reference,
              ...item.metadata,
            };
          });

          setTransactions(data);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return transactions;
};

export default useGetTransactions;
