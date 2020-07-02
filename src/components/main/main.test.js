import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import testDataOffers from "../../test-data.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      rentOffers={testDataOffers}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
