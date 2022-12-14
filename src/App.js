import React, { useEffect } from "react";
import Router from "./Router";
import MainRouter from "./MainRouter";
import { setTransactions } from "./redux/actions";
import { useDispatch } from "react-redux";
import useGetTransactions from "./hooks/useGetTransactions";

function App() {
  const dispatch = useDispatch();

  const [transactions] = useGetTransactions();

  useEffect(() => {
    dispatch(setTransactions(transactions));
  }, [transactions, dispatch]);

  return <Router />;
  // return <MainRouter />;
}

export default App;
