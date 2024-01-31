import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';


it('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
});

it('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).to.have.lengthOf(3);
});

it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
});