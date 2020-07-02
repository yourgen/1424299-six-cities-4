import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";
import testDataOffers from "../../test-data.js";

const testDataOffer = testDataOffers[0];

it(`Render OfferCard`, () => {
  const tree = renderer
    .create(<OfferCard
      rentOffer={testDataOffer}
      onCardTitleClick={() => {}}
      onCardMouseOver={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
