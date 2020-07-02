import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";
import testDataOffers from "../../test-data.js";

it(`Render PlacesList`, () => {
  const tree = renderer
    .create(<PlacesList
      rentOffers={testDataOffers}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
