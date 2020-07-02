import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";
import testDataOffers from "../../test-data.js";

const testDataOffer = testDataOffers[0];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should offer data get in mouseOver handler`, () => {
  const onCardTitleClick = jest.fn();
  const onCardMouseOver = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        key = {testDataOffer.id}
        rentOffer={testDataOffer}
        onCardTitleClick={onCardTitleClick}
        onCardMouseOver={onCardMouseOver}
      />
  );

  placeCard.find(`.place-card`).props().onMouseOver();

  expect(onCardMouseOver).toHaveBeenCalledTimes(1);
  expect(onCardMouseOver.mock.calls[0][0]).toMatchObject(testDataOffer);
});
