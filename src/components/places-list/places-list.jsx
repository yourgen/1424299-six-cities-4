import React from "react";
import PlaceCard from "../place-card/place-card.jsx";

import PropTypes from "prop-types";

const PlacesList = ({rentOffers, onCardTitleClick, onCardHover}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {rentOffers.map((rentOffer) => {
        return (
          <PlaceCard
            key = {rentOffer.id}
            rentOffer={rentOffer}
            onCardTitleClick={onCardTitleClick}
            onCardHover={onCardHover}
          />
        );
      })}
    </div>
  );
};

export default PlacesList;
