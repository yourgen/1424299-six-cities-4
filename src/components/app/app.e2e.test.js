import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";
import testDataOffers from "../../test-data.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should set clicked offer in App state`, () => {

  const app = mount(
      <App
        rentOffers={testDataOffers}
      />
  );
  const testDataOffer = testDataOffers[0];
  const cardTitle = app.find(`.place-card__name a`).first();

  cardTitle.simulate(`click`);

  expect(app.state().detailedOffer).toBe(testDataOffer);
});
