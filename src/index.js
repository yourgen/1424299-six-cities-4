import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENT_OFFERS: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`
  ],
  RENT_OFFERS_COUNT: 100500
};

ReactDOM.render(
    <App
      rentOffers={Settings.RENT_OFFERS}
      rentOffersCount={Settings.RENT_OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
