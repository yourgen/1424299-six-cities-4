import React from "react";
import Main from "../main/main.jsx";

import PropTypes from "prop-types";

const App = ({rentOffers, rentOffersCount}) => {
  return (
    <Main
      rentOffers={rentOffers}
      rentOffersCount={rentOffersCount}
    />
  );
};

App.propTypes = {
  rentOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
  ).isRequired,
  rentOffersCount: PropTypes.number.isRequired,
};

export default App;
