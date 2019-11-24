import React from 'react';
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";

import BaseCard from './TransactionHistory';
import TransItem from './TransactionHistory';
import TransactionHistory from './TransactionHistory';

let trans;

beforeEach(() => {
    trans = mount(<TransactionHistory />)
});

afterEach(() => {
    trans.unmount(<TransactionHistory />);
});

test("component BaseCard exist", () => {
    expect(BaseCard).toBeDefined();
});

test("component TransItem exist", () => {
    expect(TransItem).toBeDefined();
});

it('should render without crashing', () => {
    let amount = 20000;
    let idTransaksi= 1;
    let time= "2019-1-19 14:52:35";
    let type= "a";

    shallow(<TransactionHistory amount={amount} idTransaksi={idTransaksi} time={time} type={type}/>);
});