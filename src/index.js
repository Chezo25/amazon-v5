import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51KGZECEoJs9aFAKIZJtIqk0m3W0vpMUUZ1TROfNvUMDwM82x89x4IKl24ufxkjqYjpSoXWKc7YqjRQFjHgzY4gCO005hXpvGqP"
);

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Elements stripe={promise}>
        <App />
      </Elements>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
