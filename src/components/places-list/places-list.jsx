import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";

import PropTypes from "prop-types";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this._handleCardMouseOver = this._handleCardMouseOver.bind(this);
  }

  render() {
    const {rentOffers, onCardTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {rentOffers.map((rentOffer) => {
          return (
            <PlaceCard
              key = {rentOffer.id}
              rentOffer={rentOffer}
              onCardTitleClick={onCardTitleClick}
              onCardMouseOver={this._handleCardMouseOver}
            />
          );
        })}
      </div>
    );
  }

  _handleCardMouseOver(rentOffer) {
    this.setState({
      activeCard: rentOffer
    });
  }
}

PlacesList.propTypes = {
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
  ).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
};

export default PlacesList;
