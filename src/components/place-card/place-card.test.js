import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import testDataOffers from "../../test-data.js";

const testDataOffer = testDataOffers[0];

it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      rentOffer={testDataOffer}
      onCardTitleClick={() => {}}
      onCardMouseOver={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
