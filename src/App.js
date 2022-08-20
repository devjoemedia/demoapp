import React, { useEffect } from "react";
import Router from "./Router";
import MainRouter from "./MainRouter";
import axios from "axios";
import { setTransactions } from "./redux/actions";
import { useDispatch } from "react-redux";
import useGetTransactions from "./hooks/useGetTransactions";

function App() {
  const dispatch = useDispatch();

  const transactions = useGetTransactions();

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
          console.log(data);
          dispatch(setTransactions(data));
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return <MainRouter />;
  // return <Router />;
}

export default App;