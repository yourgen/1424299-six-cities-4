import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";

import PropTypes from "prop-types";

const handleCardTitleClick = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  _renderApp() {
    const {rentOffers} = this.props;

    return (
      <Main
        rentOffers={rentOffers}
        onCardTitleClick={handleCardTitleClick}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer-details">
            <OfferDetails/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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
