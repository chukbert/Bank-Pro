import React from 'react';
import Enzyme from "enzyme";

import BaseCard from './Transfer';
import FormGroup from './Transfer';

// let trans;

// beforeEach(() => {
//     trans = mount(<TransactionHistory />)
// });

// afterEach(() => {
//     trans.unmount();
// });

// it("has 1 BaseCardAlternate", () => {
//     expect(trans.find("BaseCardAlternate").length).toEqual(1);
//   });

const { shallow } = Enzyme;

test("component BaseCard exist", () => {
    expect(BaseCard).toBeDefined();
});

test("component FormGroup exist", () => {
    expect(FormGroup).toBeDefined();
});