import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount } from 'enzyme';

import Login from './Login';

let login;

beforeEach(() => {
    login = mount(<Login />);
});

afterEach(() => {
    login.unmount();
});

it('render without crash', () => {
    const state = {
        no_rekening: "",
        navigate: false
    };

    login.setState(state);

    shallow(<Login no_rekening={state.no_rekening} navigate={state.navigate}/>)
})