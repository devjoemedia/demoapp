import React, { useEffect } from "react";
import Router from "./Router";
import MainRouter from "./MainRouter";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://api.paystack.co/transaction", {
          headers: {
            Authorization:
              "Bearer " + process.env.REACT_APP_PAYSTACK_SECRET_KEY,
          },
          // body: { email: "customer@email.com", amount: "20000" },
          // method: 'POST',
        })
        .then((response) => console.log({ ax: response }))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return <MainRouter />;
  // return <Router />;
}

export default App;
