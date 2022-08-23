import React, { useEffect } from "react";
import Router from "./Router";
import MainRouter from "./MainRouter";
import { setTransactions } from "./redux/actions";
import { useDispatch } from "react-redux";
import useGetTransactions from "./hooks/useGetTransactions";
import useGetCampaign from "./hooks/useGetCampaign";

function App() {
  const dispatch = useDispatch();

  const [transactions] = useGetTransactions();


  useEffect(() => {
    dispatch(setTransactions(transactions));
  }, [transactions, dispatch]);

  return <MainRouter />;
  // return <Router />;
}

export default App;
