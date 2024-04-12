import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import appstore from "./utils/appstore.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51OppufSCTYfNrNc7xb9DBjv0n0dWgjPVUyrdf2mziLMIGbMoTeOf0mxJCI2Ho9N8oAvp3IjxKP2cTnR20Wd13H9c00dv6ZTgJV");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appstore}>
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <Router>
          <App />
        </Router>
      </Elements>
    </React.StrictMode>
    ,
  </Provider>
);
