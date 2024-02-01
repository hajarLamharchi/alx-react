import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
});

it('App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('./App-header').exists()).toBe(true);
});

it('App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('./App-body').exists()).toBe(true);
});

it('App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('./App-footer').exists()).toBe(true);
});