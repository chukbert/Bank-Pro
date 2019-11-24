import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TransactionHistory from './TransactionHistory'
import {BaseCard, BaseCardAlternate} from '../components/BaseCard';
import TransItem from '../components/TransItem'
import expectExport from 'expect';


let hist;

// setiap sebelum melakukan test, komponen ini kita 'pasang' terlebih dahulu
beforeEach(() => {
  hist = mount(<TransactionHistory />);
});

// setiap setelah melakukan test, komponen ini kita 'lepas'
afterEach(() => {
  hist.unmount();
});

// menjelaskan apa yang kita ingin cek di dalam test ini
it("render 'li' as much as todos", () => {
  const state = {
    todo: "",
    todos: ["todo1", "todo2"]
  };

  // kita bisa memasukkan suatu kasus untuk suatu state tertentu
  hist.setState(state);

  // Test ini dikatakan benar jika ditemukan elemen 'li' sebanyak todo yang ada di dalam todos
  // yaitu sebanyak 2 buah
  expect(hist.find("li").length).toEqual(state.todos.length);
});
