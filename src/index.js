import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENT_OFFERS: [
    {
      id: Math.random().toString(),
      title: `Beautiful & luxurious apartment at great location`,
    }, {
      id: Math.random().toString(),
      title: `Wood and stone place`,
    }, {
      id: Math.random().toString(),
      title: `Canal View Prinsengracht`,
    }, {
      id: Math.random().toString(),
      title: `Nice, cozy, warm big bed apartment`,
    }
  ]
};

ReactDOM.render(
    <App
      rentOffers={Settings.RENT_OFFERS}
      rentOffersCount={Settings.RENT_OFFERS.length}
    />,
    document.querySelector(`#root`)
);
