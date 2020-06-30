import React from "react";
import Main from "../main/main.jsx";

import PropTypes from "prop-types";

const handleCardTitleClick = () => {};

const App = ({rentOffers}) => {
  return (
    <Main
      rentOffers={rentOffers}
      onCardTitleClick={handleCardTitleClick}
    />
  );
};

App.propTypes = {
  rentOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
        }).isRequired,
        price: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  ).isRequired
};

export default App;
