import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount } from 'enzyme';

import FormGroup from './FormGroup';

let form;

beforeEach(() => {
    form = mount(<FormGroup />);
});

afterEach(() => {
    form.unmount();
});

it('render without crash', () => {
    const state = {
        account:"123",
        amount:"123",
        status:"pending"
    };

    form.setState(state);

    shallow(<FormGroup account={state.account} amount={state.amount} status={state.status}/>)
})