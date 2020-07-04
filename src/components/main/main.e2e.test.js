import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import testDataOffers from "../../test-data.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header button be pressed`, () => {
  const onCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        rentOffers={testDataOffers}
        onCardTitleClick={onCardTitleClick}
      />
  );

  const cardTitles = main.find(`.place-card__name a`);

  cardTitles.forEach((title) => {
    title.props().onClick();
  });

  expect(onCardTitleClick.mock.calls.length).toBe(cardTitles.length);
});
