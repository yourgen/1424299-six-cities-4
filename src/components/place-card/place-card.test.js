import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import TEST_DATA_OFFERS from "../../test-data.js";

const TEST_DATA_OFFER = TEST_DATA_OFFERS[0];

it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      rentOffer={TEST_DATA_OFFER}
      onCardTitleClick={() => {}}
      onCardMouseOver={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
