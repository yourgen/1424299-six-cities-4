import React from "react";
import renderer from "react-test-renderer";
import OfferDetails from "./offer-details.jsx";
import testDataOffers from "../../test-data.js";

const testDataOffer = testDataOffers[0];

it(`Render OfferDetails`, () => {
  const tree = renderer
    .create(<OfferDetails
      rentOffer={testDataOffer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
