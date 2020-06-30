import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";
import TEST_DATA_OFFERS from "../../test-data.js";

const TEST_DATA_OFFER = TEST_DATA_OFFERS[0];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should offer data get in mouseOver handler`, () => {
  const onCardTitleClick = jest.fn();
  const onCardMouseOver = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        key = {TEST_DATA_OFFER.id}
        rentOffer={TEST_DATA_OFFER}
        onCardTitleClick={onCardTitleClick}
        onCardMouseOver={onCardMouseOver}
      />
  );

  placeCard.find(`.place-card`).props().onMouseOver();

  expect(onCardMouseOver).toHaveBeenCalledTimes(1);
  expect(onCardMouseOver.mock.calls[0][0]).toMatchObject(TEST_DATA_OFFER);
});
