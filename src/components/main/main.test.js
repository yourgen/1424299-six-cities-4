import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import TEST_DATA_OFFERS from "../../test-data.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      rentOffers={TEST_DATA_OFFERS}
      rentOffersCount={TEST_DATA_OFFERS.length}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
