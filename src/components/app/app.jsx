import React from "react";
import Main from "../main/main.jsx";
// eslint-disable-next-line react/prop-types
const App = ({rentOffers, rentOffersCount}) => {

  return (
    <Main
      rentOffers={rentOffers}
      rentOffersCount={rentOffersCount}
    />
  );
};

export default App;
