import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import testDataOffers from "../../test-data.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      rentOffers={testDataOffers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
