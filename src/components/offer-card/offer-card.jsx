import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerTypesMap} from "../../const.js";

class OfferCard extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {rentOffer, onCardTitleClick, onCardMouseOver} = this.props;
    const {title, img, price, type, rating, isPremium} = rentOffer;

    return (
      <article
        className="cities__place-card place-card"
        onMouseOver={() => onCardMouseOver(rentOffer)}
      >
        {isPremium ? <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={img.src} width="260" height="200" alt={img.alt}/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a
              href="#"
              onClick={onCardTitleClick}
            >{title}</a>
          </h2>
          <p className="place-card__type">{offerTypesMap[type]}</p>
        </div>
      </article>
    );
  }
}

OfferCard.propTypes = {
  rentOffer: PropTypes.shape({
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
  }),
  onCardTitleClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default OfferCard;
