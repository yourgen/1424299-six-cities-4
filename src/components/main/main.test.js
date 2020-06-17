import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const TestData = {
  RENT_OFFERS: [
    {
      id: `123`,
      title: `Beautiful & luxurious apartment at great location`,
    }, {
      id: `456`,
      title: `Wood and stone place`,
    }, {
      id: `789`,
      title: `Canal View Prinsengracht`,
    }, {
      id: `012`,
      title: `Nice, cozy, warm big bed apartment`,
    }
  ]
};

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      rentOffers={TestData.RENT_OFFERS}
      rentOffersCount={TestData.RENT_OFFERS.length}
      onHeaderBtnClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
