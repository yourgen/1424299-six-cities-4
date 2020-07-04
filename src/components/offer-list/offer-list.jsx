import React, {PureComponent} from "react";
import OfferCard from "../offer-card/offer-card.jsx";

import PropTypes from "prop-types";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this.handleCardMouseOver = this.handleCardMouseOver.bind(this);
  }

  handleCardMouseOver(rentOffer) {
    this.setState({
      activeCard: rentOffer
    });
  }

  render() {
    const {rentOffers, onCardTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {rentOffers.map((rentOffer) => {
          return (
            <OfferCard
              key = {rentOffer.id}
              rentOffer={rentOffer}
              onCardTitleClick={onCardTitleClick}
              onCardMouseOver={this.handleCardMouseOver}
            />
          );
        })}
      </div>
    );
  }
}

OfferList.propTypes = {
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

export default OfferList;
