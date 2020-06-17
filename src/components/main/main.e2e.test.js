import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header button be pressed`, () => {
  const onCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        rentOffers={TestData.RENT_OFFERS}
        rentOffersCount={TestData.RENT_OFFERS.length}
        onCardTitleClick={onCardTitleClick}
      />
  );

  const cardTitles = main.find(`.place-card__name a`);

  cardTitles.forEach((title) => {
    title.props().onClick();
  });

  expect(onCardTitleClick.mock.calls.length).toBe(cardTitles.length);
});
