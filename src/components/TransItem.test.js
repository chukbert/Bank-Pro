import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import TransItem from './TransItem';
import { isTSAnyKeyword } from '@babel/types';

it('render without crash', () => {
    shallow(<TransItem />);
});

it('should render without crashing', () => {
    let amount = 20000;
    let idTransaksi: 1;
    let time: "2019-11-19 14:52:35";
    let type: "a";
    shallow(<TransItem amount={amount} idTransaksi={idTransaksi} time={time} type={type}/>);
});