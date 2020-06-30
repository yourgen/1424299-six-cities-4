import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import TEST_DATA_OFFERS from "../../test-data.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header button be pressed`, () => {
  const onCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        rentOffers={TEST_DATA_OFFERS}
        rentOffersCount={TEST_DATA_OFFERS.length}
        onCardTitleClick={onCardTitleClick}
      />
  );

  const cardTitles = main.find(`.place-card__name a`);

  cardTitles.forEach((title) => {
    title.props().onClick();
  });

  expect(onCardTitleClick.mock.calls.length).toBe(cardTitles.length);
});
