import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from "enzyme";

import BaseCardAlternate from './Home';
import TransactionHistory from './Home';

const { shallow } = Enzyme;

test("component BaseCardAlternate exist", () => {
    expect(BaseCardAlternate).toBeDefined();
});

it('should render without crashing', () => {
    shallow(<TransactionHistory />);
});
