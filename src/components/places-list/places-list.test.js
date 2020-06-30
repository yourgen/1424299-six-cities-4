import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";
import TEST_DATA_OFFERS from "../../test-data.js";

it(`Render PlacesList`, () => {
  const tree = renderer
    .create(<PlacesList
      rentOffers={TEST_DATA_OFFERS}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
