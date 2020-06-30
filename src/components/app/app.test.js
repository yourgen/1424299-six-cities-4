import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import TEST_DATA_OFFERS from "../../test-data.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      rentOffers={TEST_DATA_OFFERS}
      rentOffersCount={TEST_DATA_OFFERS.length}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
