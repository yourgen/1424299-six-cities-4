import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const TEST_DATA_TITLE = `Lorem ipsum dolor sit`;

it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      rentOfferTitle={TEST_DATA_TITLE}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
