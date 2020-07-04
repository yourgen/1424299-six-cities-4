import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list.jsx";
import testDataOffers from "../../test-data.js";

it(`Render OfferList`, () => {
  const tree = renderer
    .create(<OfferList
      rentOffers={testDataOffers}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
