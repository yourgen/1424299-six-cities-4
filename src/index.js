import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

ReactDOM.render(
    <App
      rentOffers={offers}
    />,
    document.querySelector(`#root`)
);
